import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.model';
import { ApiResponse } from '@nestjs/swagger';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Items] })
  getAllItems() {
    return this.itemsService.getAllItems();
  }
}
