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
    return items;
  }

  async getItemsWithFilters(filterDto: GetItemsFilterDto) {
    const { search, price } = filterDto;

    let items = await this.itemsRepository.findAll({
      include: { all: true },
    });
    if (price) {
      if (price == 'asc') {
        items.sort();
      }
      if (price == 'desc') {
        items.sort().reverse();
      }
    }
    if (search) {
      items = await items.filter(
        (item) =>
          item.title.toLowerCase().includes(search.toLowerCase()) ||
          item.description.toLowerCase().includes(search.toLowerCase()),
      );
    }
    const totalPages = Math.ceil(items.length / 100);
    const response = {
      totalPages: totalPages,
      items: items,
    };
    return response;
  }

  async create(dto: CreateItemDto, image: any) {
    const fileName = await this.fileService.createFile(image);
    const item = await this.itemsRepository.create({ ...dto, image: fileName });
    return item;
  }
}
