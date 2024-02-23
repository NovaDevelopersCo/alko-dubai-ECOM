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
}
