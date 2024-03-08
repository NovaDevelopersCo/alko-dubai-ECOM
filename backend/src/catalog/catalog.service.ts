import { Injectable } from '@nestjs/common';
import { FilesService } from 'src/files/files.service';
import { ItemsService } from 'src/items/items.service';
import { Catalog } from './catalog.model';
import { InjectModel } from '@nestjs/sequelize';

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
      const item = await this.catalogRepository.findOne({
        where: { title: key },
      });
      item.items = catalog[key];
      await item.save();
    }
  }

  // async update(id: number, dto: UpdateCatalogDto, image: any) {
  //   if (image !== undefined) {
  //     const fileName = await this.fileService.createFile(image);
  //     const category = await this.catalogRepository.update(id, {
  //       ...dto,
  //       image: fileName,
  //     });
  //     return category;
  //   }
  //   const category = await this.catalogRepository.update(id, { ...dto });
  //   return category;
  // }
}
