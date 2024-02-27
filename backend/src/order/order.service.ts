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

  async sendMail(dto) {
    const data = `<b>Dear ${dto.email}</b>
    <p>Thank you for your order. We will contact you as soon as possible.</p>
    <p>Your order details:</p>
    <ul>
      ${dto.items.map((item) => `<li>${item.title}</li>`)}
    <p>Best regards, Alko team</p>`;
    this.mailerService
      .sendMail({
        to: dto.email,
        subject: 'Hello ✔',
        html: data,
      })
      .then(() => {
        console.log('Email sent to ' + dto.email);
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
    this.sendMail(dto);
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
