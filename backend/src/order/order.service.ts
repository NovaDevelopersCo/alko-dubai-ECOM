import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order) private itemsRepository: typeof Order) {}

  async getAllItems() {
    const orders = await this.itemsRepository.findAll({
      include: { all: true },
    });
    return orders;
  }

  async create(dto: CreateOrderDto) {
    const order = await this.itemsRepository.create({ ...dto });
    return order;
  }

  async getItemById(id: number) {
    const order = await this.itemsRepository.findOne({
      where: { id },
    });
    return order;
  }
}
