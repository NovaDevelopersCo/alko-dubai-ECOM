import { Injectable, UploadedFile } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Items } from './items.model';
import { FilesService } from 'src/files/files.service';

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

  async create(dto, @UploadedFile() image) {
    const fileName = await this.fileService.createFile(image);
    const item = await this.itemsRepository.create({ ...dto, image: fileName });
    return item;
  }
}
