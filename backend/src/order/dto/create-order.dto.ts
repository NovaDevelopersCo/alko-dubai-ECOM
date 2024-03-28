import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({
    example: [
      {
        id: 1,
        title: 'testItem',
        description: 'Старая цена',
        image: '12345',
        category: '12345',
        price: 12345,
        quantity: 1,
        oldPrice: 12345,
        viewsCount: 12345,
        sale: true,
        soldOut: true,
      },
    ],
    description: 'Массив товаров в заказе',
    required: true,
  })
  readonly items: Array<string>;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Вася Пупкин',
    description: 'Имя заказчика',
    required: true,
  })
  readonly name: string;

  @IsEmail()
  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почта пользователя',
    required: true,
  })
  readonly email: string;

  @IsNotEmpty()
  @ApiProperty({
    example: '+79094588426',
    description: 'Телефон заказчика',
  })
  readonly phone: string;

  @ApiProperty({
    example: 'хочу быстрее',
    description: 'Примечание к заказу',
    required: false,
  })
  readonly details: string;

  @IsInt()
  @ApiProperty({ example: 1560, description: 'Цена', required: true })
  readonly price: number;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Улица пушкина дом колотушкина',
    description: 'Адрес',
    required: true,
  })
  readonly address: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'Наличными',
    description: 'Способ оплаты',
    required: true,
  })
  readonly payment: string;

  @ApiProperty({
    example: 'В обарботке',
    description: 'Статус заказа',
    required: false,
  })
  readonly status: string;
}
