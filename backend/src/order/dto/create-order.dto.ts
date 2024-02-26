import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({
    example: 'Вася Пупкин',
    description: 'Имя заказчика',
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почта пользователя',
    required: true,
  })
  readonly email: string;

  @ApiProperty({
    example: 'хочу быстрее',
    description: 'Примечание к заказу',
    required: false,
  })
  readonly details: string;

  @ApiProperty({ example: 1560, description: 'Цена', required: true })
  readonly price: number;

  @ApiProperty({
    example: 'Улица пушкина дом колотушкина',
    description: 'Адрес',
    required: true,
  })
  readonly address: string;

  @ApiProperty({
    example: 'В обарботке',
    description: 'Статус заказа',
    required: false,
  })
  readonly status: string;
}
