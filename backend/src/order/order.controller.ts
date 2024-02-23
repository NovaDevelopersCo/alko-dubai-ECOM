import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('Orders')
@Controller('api/order')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @ApiOperation({ summary: 'Получить все заказы (с параметрами)' })
  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  getItems(): Order[] {
    return;
  }

  @ApiOperation({ summary: 'Создать заказ' })
  @Post()
  @ApiResponse({ status: 200, type: Order })
  createItem(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  @ApiOperation({ summary: 'Получить заказ по id' })
  @Get('/:id')
  @ApiResponse({ status: 200, type: Order })
  getByValue(@Param('id') id: number) {
    return this.ordersService.getItemById(id);
  }
}
