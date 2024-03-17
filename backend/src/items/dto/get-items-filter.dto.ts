import { ApiProperty } from '@nestjs/swagger';

export class GetItemsFilterDto {
  @ApiProperty({ example: 'Вино', description: 'Поиск', required: false })
  readonly search: string;

  @ApiProperty({
    example: 'asc',
    description: 'desc/asc Сортировка по убыванию/по возрастанию',
    required: false,
  })
  readonly price: string;

  @ApiProperty({
    example: true,
    description: 'Сортировка по популярности',
    required: false,
  })
  readonly popularity: boolean;

  @ApiProperty({
    example: true,
    description: 'Сортировка по новизне',
    required: false,
  })
  readonly news: boolean;

  @ApiProperty({
    example: 0,
    description: 'Минимальная цена',
    required: false,
  })
  readonly min_price: number;

  @ApiProperty({
    example: 1500,
    description: 'Максимальная цена',
    required: false,
  })
  readonly max_price: number;

  @ApiProperty({
    example: false,
    description: 'Скидака',
    required: false,
  })
  readonly sale: string;

  @ApiProperty({
    example: 1500,
    description: 'Огранчение',
    required: false,
  })
  readonly limit: number;

  @ApiProperty({
    example: 'Виски',
    description: 'Получить все товары с категорией',
    required: false,
  })
  readonly category: string;
}
