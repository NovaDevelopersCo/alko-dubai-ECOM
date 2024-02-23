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

  @ApiProperty({ example: 'testItem', description: 'Название товара' })
  @Column({ type: DataType.ARRAY })
  items: Array<Items>;

  @ApiProperty({ example: 'testItem', description: 'Название товара' })
  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'Очень вкусный алкоголь',
    description: 'Описание товара',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  details: string;

  @ApiProperty({ example: '1202AED', description: 'Цена' })
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  price: number;

  @ApiProperty({
    example: 'Очень вкусный алкоголь',
    description: 'Описание товара',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  address: string;

  @ApiProperty({
    example: 'Очень вкусный алкоголь',
    description: 'Описание товара',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: 'В обработке',
  })
  status: string;
}
