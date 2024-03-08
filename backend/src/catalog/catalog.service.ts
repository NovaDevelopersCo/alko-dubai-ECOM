import { Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { ItemsService } from 'src/items/items.service';
import { Catalog } from './catalog.model';
import { InjectModel } from '@nestjs/sequelize';
import { UpdateCatalogDto } from './dto/UpdateCatalogDto';

@Injectable()
export class CatalogService {
  constructor(
    private itemsService: ItemsService,
    private fileService: FilesService,
    @InjectModel(Catalog) private catalogRepository: typeof Catalog,
  ) {}
  async getAllCatalog() {
    await this.update();
    return await this.catalogRepository.findAll();
  }

  async getCatalogByName(title: string) {
    await this.update();
    const item = await this.catalogRepository.findOne({
      where: { title },
    });
    return item;
  }

  async update() {
    const items = (await this.itemsService.getAllItems()).items;

    const catalog = items.reduce((acc, obj) => {
      acc[obj.category] = (acc[obj.category] || 0) + 1;
      return acc;
    }, {});

    // await this.catalogRepository;
    for (const key in catalog) {
      const category = await this.catalogRepository.findOne({
        where: { title: key },
      });
      category.items = catalog[key];
      await category.save();
    }
  }

  async updateCatalog(id: number, dto: UpdateCatalogDto, image: any) {
    const catalog = await this.catalogRepository.findOne({
      where: { id },
    });
    if (image !== undefined) {
      const fileName = await this.fileService.createFile(image);
      catalog.title = dto.title ? dto.title : catalog.title;
      catalog.image = fileName;
      return await catalog.save();
    }
    catalog.title = dto.title ? dto.title : catalog.title;
    return await catalog.save();
  }
}
