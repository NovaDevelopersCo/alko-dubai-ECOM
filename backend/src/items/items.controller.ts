import { Controller, Get, Post, UploadedFile } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.model';
import { ApiResponse } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Items] })
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Post()
  @ApiResponse({ status: 200, type: Items })
  createItem(dto: CreateItemDto, @UploadedFile() image) {
    return this.itemsService.create(dto, image);
  }
}
