import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private ordersRepository: typeof Order) {}

  async getAllItems() {
    const orders = await this.ordersRepository.findAll({
      include: { all: true },
    });
    return orders;
  }

  async create(dto: CreateOrderDto) {
    console.log(dto);
    const order = await this.ordersRepository.create(dto);
    return order;
  }

  async getItemById(id: number) {
    const order = await this.ordersRepository.findOne({
      where: { id },
    });
    return order;
  }
}
