import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ItemsCreationAttrs {
  title: string;
  price: number;
  oldPrice: number;
  sale: boolean;
  category: string;
  soldOut: boolean;
  description: string;
  image: string;
}
@Table({ tableName: 'items' })
export class Items extends Model<ItemsCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'testItem', description: 'Название товара' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'Очень вкусный алкоголь',
    description: 'Описание товара',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({ example: 'Картинка', description: 'Захватывающая картинка' })
  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ApiProperty({
    example: 'Очень вкусный алкоголь',
    description: 'Описание товара',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  category: string;

  @ApiProperty({ example: '1202AED', description: 'Цена' })
  @Column({ type: DataType.INTEGER, allowNull: false })
  price: number;

  @ApiProperty({ example: '1500AED', description: 'Старая цена' })
  @Column({ type: DataType.INTEGER, allowNull: true })
  oldPrice: number;

  @ApiProperty({ example: true, description: 'Есть ли скидка' })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  sale: boolean;

  @ApiProperty({ example: false, description: 'Распродано ли' })
  @Column({ type: DataType.BOOLEAN, allowNull: true })
  soldOut: boolean;
}
