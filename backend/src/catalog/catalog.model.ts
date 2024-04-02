import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CatalogCreationAttrs {
  id: number;
  title: string;
  image: string;
  items: number;
}
@Table({ tableName: 'Catalog' })
export class Catalog extends Model<CatalogCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Уникальный идентефикатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({ example: 'testItem', description: 'Название товара' })
  @Column({ type: DataType.STRING(2024), unique: true, allowNull: false })
  title: string;

  @ApiProperty({ example: 'Картинка', description: 'Захватывающая картинка' })
  @Column({ type: DataType.STRING(2024), allowNull: true, defaultValue: null })
  image: string;

  @ApiProperty({ example: 1202, description: 'Цена' })
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 0 })
  items: number;
}
