import { Injectable } from '@nestjs/common';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class CatalogService {
  constructor(private itemsService: ItemsService) {}
  async getAllCatalog() {
    const items = (await this.itemsService.getAllItems()).items;

    const response = items;
    return response;
  }
}
