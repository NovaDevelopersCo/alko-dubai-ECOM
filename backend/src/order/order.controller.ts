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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('Items')
@Controller('api/items')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @ApiOperation({ summary: 'Получить все товары (с параметрами)' })
  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  getItems(): Order[] {
    return;
  }

  @ApiOperation({ summary: 'Создать товар' })
  @Post()
  @ApiResponse({ status: 200, type: Order })
  @UseInterceptors(FileInterceptor('image'))
  createItem(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  @ApiOperation({ summary: 'Получить товар по id' })
  @Get('/:id')
  @ApiResponse({ status: 200, type: Order })
  getByValue(@Param('id') id: number) {
    return this.ordersService.getItemById(id);
  }
}
