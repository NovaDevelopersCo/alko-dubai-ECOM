import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private ordersRepository: typeof Order) {}

  async getAllOrders() {
    const orders = await this.ordersRepository.findAll({
      include: { all: true },
    });
    orders.map((order) => {
      if (order.items) {
        order.items = order.items.map((item) => JSON.parse(item));
      }
    });
    return orders;
  }

  async create(dto: CreateOrderDto) {
    const order = await this.ordersRepository.create({ ...dto });
    return order;
  }

  async getItemById(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id },
    });
    const items: any = order.items.map((item) => JSON.parse(item));
    order.items = items;
    return order;
  }
}
