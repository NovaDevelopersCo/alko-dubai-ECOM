import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Items } from './items.model';
import { FilesService } from 'src/files/files.service';
import { CreateItemDto } from './dto/create-item.dto';
import { GetItemsFilterDto } from './dto/get-items-filter.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items) private itemsRepository: typeof Items,
    private fileService: FilesService,
  ) {}

  async getAllItems() {
    const items = await this.itemsRepository.findAll({
      include: { all: true },
    });
    const totalPages = Math.ceil(items.length / 100);
    console.log(items.length);
    const response = {
      totalPages: totalPages,
      items: items,
    };
    return response;
  }

  async getItemsWithFilters(filterDto: GetItemsFilterDto) {
    const {
        search,
        price,
        popularity = false,
        news = false,
        max_price,
        sale = false,
        min_price = 0,
        limit = 100
    } = filterDto;

    let items = await this.itemsRepository.findAll({
        include: { all: true },
    });

    // Применяем сортировку по цене, популярности и новизне
    if (price) {
        if (price == 'asc') {
            items.sort((a, b) => a.price - b.price);
        }
        if (price == 'desc') {
            items.sort((a, b) => b.price - a.price);
        }
    }

    if (news) {
        items.sort((a, b) => b.updatedAt - a.updatedAt);
    }

    if (popularity) {
        items.sort((a, b) => b.viewsCount - a.viewsCount);
    }

    // Применяем специальную сортировку по свойству sale
    if (sale) {items.sort((a, b) => {
        if (a.sale && !b.sale) {
            return -1; // Если у a.sale=true, а у b.sale=false, то a должен быть перед b
        } else if (!a.sale && b.sale) {
            return 1; // Если у a.sale=false, а у b.sale=true, то b должен быть перед a
        } else {
            return 0; // В противном случае сохраняется порядок
        }
    })};

    // Применяем фильтрацию по остальным параметрам
    if (search) {
        items = items.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (min_price) {
        items = items.filter(item => item.price >= min_price);
    }

    if (max_price) {
        items = items.filter(item => item.price <= max_price);
    }

    // Рассчитываем общее количество страниц и возвращаем результат
    const totalPages = Math.ceil(items.length / limit);
    const response = {
        totalPages: totalPages,
        items: items,
    };
    return response;
}


  async create(dto: CreateItemDto, image: any) {
    if (image !== undefined) {
      const fileName = await this.fileService.createFile(image);
      const item = await this.itemsRepository.create({
        ...dto,
        image: fileName,
      });
      return item;
    }
    const item = await this.itemsRepository.create({ ...dto });
    return item;
  }

  async getItemById(id: number) {
    const item = await this.itemsRepository.findOne({
      where: { id },
    });
    item.viewsCount++;
    item.save();
    return item;
  }
}
