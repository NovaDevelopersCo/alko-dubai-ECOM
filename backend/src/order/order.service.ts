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
    const data = `<div>
    <h2 style="background-color: lime; text-align: center;">Уведомление о новом заказе!</h2>
    <p><strong>Имя:</strong> ${dto.name}</p>
    <p><strong>Телефон:</strong> ${dto.phone}</p>
    <p><strong>Адрес:</strong> ${dto.address}</p>
    <h3>Товары в заказе:</h3>
    <ul>
        ${dto.items.map(
          (product) =>
            `<li key=${product.id}>
                <p><strong>Название товара:</strong> ${product.title}</p>
                <p><strong>Категория:</strong> ${product.category}</p>
                <p><strong>Количество:</strong> ${product.quantity}</p>
                <p><strong>Цена за штуку:</strong> ${product.price}</p>
                <p><strong>Сумма товара:</strong> ${product.quantity * product.price}</p>
            </li>`,
        )}
    </ul>
    <p><strong>Общая сумма заказа:</strong> ${dto.price}</p>
    <p><strong>Детали заказа:</strong> ${dto.details}</p>
</div>
`;
    this.mailerService
      .sendMail({
        to: dto.email,
        subject: 'Новый заказ на Alko!',
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
