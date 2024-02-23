import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Items')
@Controller('api/items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Items] })
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Post()
  @ApiResponse({ status: 200, type: Items })
  @UseInterceptors(FileInterceptor('image'))
  createItem(@Body() dto: CreateItemDto, @UploadedFile() image) {
    return this.itemsService.create(dto, image);
  }
}
