import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly appService: ItemsService) {}

  @Get('/api/items')
  getAllItems(): string {
    return this.appService.getAllItems();
  }
}
