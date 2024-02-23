import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Items } from 'src/items/items.model';

interface OrdersCreationAttrs {
  id: number;
  items: Array<Items>;
  name: string;
  details: string;
  price: number;
  address: string;
  status: string;
}
console.log(typeof Items);

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
        oldPrice: 12345,
        viewsCount: 12345,
        sale: true,
        soldOut: true,
      },
    ],
    description: 'Массив товаров в заказе',
  })
  @Column(DataType.ARRAY(DataType.STRING))
  items: Items[];

  @ApiProperty({ example: 'Вася Пупкин', description: 'Имя заказчика' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'хочу быстрее',
    description: 'Примечание к заказу',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  details: string;

  @ApiProperty({ example: '1202AED', description: 'Цена заказа' })
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  price: number;

  @ApiProperty({
    example: 'Улица пушкина дом колотушкина',
    description: 'Адрес',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({
    example: 'В обарботке',
    description: 'Статус заказа',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'В обработке',
  })
  status: string;
}
