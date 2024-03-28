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
    const data = `<table style="max-width: 700px; margin: 20px auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 20px;">
    <tr>
      <td colspan="2" style="background-color: lime; text-align: center; padding: 10px; border-radius: 5px;">
        <h2>Уведомление о новом заказе!</h2>
      </td>
    </tr>
    <tr>
      <td><strong>Имя:</strong></td>
      <td>${dto.name}</td>
    </tr>
    <tr>
      <td><strong>Телефон:</strong></td>
      <td>${dto.phone}</td>
    </tr>
    <tr>
      <td><strong>Адрес:</strong></td>
      <td>${dto.address}</td>
    </tr>
    <tr>
      <td colspan="2">
        <h3>Товары в заказе:</h3>
        <ul style="list-style-type: none; padding: 0;">
          ${dto.items
            .map(
              (product) =>
                `<li key=${product.id} style="background-color: #f9f9f9; border-radius: 5px; padding: 10px; margin-bottom: 10px;">
                  <p><strong>Название товара:</strong> ${product.title}</p>
                  <p><strong>Категория:</strong> ${product.category}</p>
                  <p><strong>Количество:</strong> ${product.count}</p>
                  <p><strong>Цена за штуку:</strong> ${product.price} AED</p>
                  <p><strong>Сумма товара:</strong> ${product.count * product.price} AED</p>
              </li>`,
            )
            .join('')}
        </ul>
      </td>
    </tr>
    <tr>
      <td><strong>Общая сумма заказа:</strong></td>
      <td>${dto.price} AED</td>
    </tr>
    <tr>
      <td><strong>Детали заказа:</strong></td>
      <td>${dto.details ? dto.details : 'Нет деталей'}</td>
    </tr>
  </table>
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
    this.mailerService
      .sendMail({
        to: 'egor147536987@gmail.com',
        subject: 'Новый заказ на Alko!',
        html: data,
      })
      .then(() => {
        console.log('Email sent to ' + 'egor147536987@gmail.com');
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
    const order = await this.ordersRepository.create({
      ...dto,
      phone: '+' + dto.phone,
    });
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
