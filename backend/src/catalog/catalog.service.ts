import { Injectable } from '@nestjs/common';
import { ItemsService } from 'src/items/items.service';

@Injectable()
export class CatalogService {
  constructor(private itemsService: ItemsService) {}
  async getAllCatalog() {
    const response = this.itemsService.getAllItems();
    return response;
  }
}
