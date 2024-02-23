import { ApiProperty } from '@nestjs/swagger';
import { Items } from 'src/items/items.model';

export class CreateOrderDto {
  @ApiProperty({
    example: 'Шато Марго 1958',
    description: 'Название',
    required: true,
  })
  readonly items: Array<Items>;

  @ApiProperty({
    example: 'Очень вкусное вино',
    description: 'Описание товара',
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    example: 'Белое полусухое',
    description: 'Категория',
    required: false,
  })
  readonly details: string;

  @ApiProperty({ example: '1560AED', description: 'Цена', required: true })
  readonly price: number;

  @ApiProperty({
    example: 'Очень вкусное вино',
    description: 'Описание товара',
    required: true,
  })
  readonly address: string;

  @ApiProperty({
    example: 'Белое полусухое',
    description: 'Категория',
    required: true,
  })
  readonly status: string;
}
