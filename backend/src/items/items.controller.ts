import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './items.model';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateItemDto } from './dto/create-item.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { GetItemsFilterDto } from './dto/get-items-filter.dto';

@ApiTags('Items')
@Controller('api/items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Get()
  @ApiResponse({ status: 200, type: [Items] })
  getItems(@Query() filterDto: GetItemsFilterDto): Items[] {
    if (Object.keys(filterDto).length) {
      return this.itemsService.getItemsWithFilters(
        filterDto,
      ) as unknown as Items[];
    } else {
      return this.itemsService.getAllItems() as unknown as Items[];
    }
  }

  @Post()
  @ApiResponse({ status: 200, type: Items })
  @UseInterceptors(FileInterceptor('image'))
  createItem(@Body() dto: CreateItemDto, @UploadedFile() image) {
    return this.itemsService.create(dto, image);
  }

  @Get('/:id')
  getByValue(@Param('id') id: number) {
    return this.itemsService.getItemById(id);
  }
}
