import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Items } from './items.model';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Items) private itemsRepository: typeof Items) {}
  async getAllItems() {
    const items = await this.itemsRepository.findAll({
      include: { all: true },
    });
    return items;
  }
}
