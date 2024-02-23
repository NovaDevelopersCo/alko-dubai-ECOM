import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ example: 'Шато Марго 1958', description: 'Название' })
  readonly title: string;

  @ApiProperty({
    example: 'Очень вкусное вино',
    description: 'Описание товара',
  })
  readonly description: string;

  @ApiProperty({ example: 'Белое полусухое', description: 'Категория' })
  readonly category: string;

  @ApiProperty({ example: '1560AED', description: 'Цена' })
  readonly price: number;

  @ApiProperty({ example: '1500AED', description: 'Старая цена' })
  readonly oldPrice: number;

  @ApiProperty({ example: true, description: 'Есть ли скидка' })
  readonly sale: boolean;

  @ApiProperty({ example: false, description: 'Распродано ли' })
  readonly soldOut: boolean;

  @ApiProperty({ example: 155, description: 'Количество просмотров' })
  readonly viewsCount: number;
}
