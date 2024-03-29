import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@ApiTags('Orders')
@Controller('api/order')
export class OrderController {
  constructor(private ordersService: OrderService) {}

  @ApiOperation({ summary: 'Получить все заказы' })
  @Get()
  @ApiResponse({ status: 200, type: [Order] })
  getOrders() {
    return this.ordersService.getAllOrders();
  }

  @ApiOperation({ summary: 'Создать заказ' })
  @Post()
  @ApiResponse({ status: 200, type: Order })
  createOrder(@Body() dto: CreateOrderDto) {
    return this.ordersService.create(dto);
  }

  @ApiOperation({ summary: 'Получить заказ по id' })
  @Get('/:id')
  @ApiResponse({ status: 200, type: Order })
  getById(@Param('id') id: number) {
    return this.ordersService.getItemById(id);
  }
}
