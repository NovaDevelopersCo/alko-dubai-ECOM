import { Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { ItemsService } from 'src/items/items.service';
import { Catalog } from './catalog.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCatalogDto } from './dto/CreateCatalogDto';

@Injectable()
export class CatalogService {
  constructor(
    private itemsService: ItemsService,
    private fileService: FilesService,
    @InjectModel(Catalog) private catalogRepository: typeof Catalog,
  ) {}
  async getAllCatalog() {
    const items = (await this.itemsService.getAllItems()).items;

    const response = items.reduce((acc, obj) => {
      acc[obj.category] = (acc[obj.category] || 0) + 1;
      return acc;
    }, {});
    return response;
  }

  async create(dto: CreateCatalogDto, image: any) {
    if (image !== undefined) {
      const fileName = await this.fileService.createFile(image);
      const item = await this.catalogRepository.create({
        ...dto,
        image: fileName,
      });
      return item;
    }
    const item = await this.catalogRepository.create({ ...dto });
    return item;
  }
}
