import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface OrdersCreationAttrs {
  id: number;
  items: Array<string>;
  name: string;
  email: string;
  phone: string;
  details: string;
  price: number;
  address: string;
  payment: string;
  status: string;
}

@Table({ tableName: 'orders' })
export class Order extends Model<OrdersCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

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
  })
  @Column(DataType.ARRAY(DataType.STRING(2024)))
  items: string[];

  @ApiProperty({ example: 'Вася Пупкин', description: 'Имя заказчика' })
  @Column({ type: DataType.STRING(2024), allowNull: false })
  name: string;

  @ApiProperty({
    example: 'test@gmail.com',
    description: 'Почта пользователя',
  })
  @Column({ type: DataType.STRING(2024), allowNull: false })
  email: string;

  @ApiProperty({
    example: '+79094588426',
    description: 'Телефон заказчика',
  })
  @Column({ type: DataType.STRING(2024), allowNull: false })
  phone: string;

  @ApiProperty({
    example: 'хочу быстрее',
    description: 'Примечание к заказу',
  })
  @Column({ type: DataType.STRING(2024), allowNull: true })
  details: string;

  @ApiProperty({ example: 1202, description: 'Цена заказа' })
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  price: number;

  @ApiProperty({
    example: 'Улица пушкина дом колотушкина',
    description: 'Адрес',
  })
  @Column({ type: DataType.STRING(2024), allowNull: false })
  address: string;

  @ApiProperty({
    example: 'Улица пушкина дом колотушкина',
    description: 'Адрес',
  })
  @Column({ type: DataType.STRING(2024), allowNull: false })
  payment: string;

  @ApiProperty({
    example: 'В обарботке',
    description: 'Статус заказа',
  })
  @Column({
    type: DataType.STRING(2024),
    allowNull: false,
    defaultValue: 'В обработке',
  })
  status: string;
}
