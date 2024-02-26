import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order) private ordersRepository: typeof Order,
    private readonly mailerService: MailerService,
  ) {}

  async sendMail() {
    this.mailerService
      .sendMail({
        to: 'egor147536987@gmail.com',
        from: 'zazoom1475369@gmail.com',
        subject: 'Hello ✔',
        text: 'Hello world!',
        html: '<b>Hello world!</b>',
      })
      .then(() => {
        console.log('Email sent to' + 'egor147536987@gmail.com');
      })
      .catch((e) => {
        console.log('Error sending email', e);
      });
  }

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
    this.sendMail();
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
