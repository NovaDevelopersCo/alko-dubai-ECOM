import { ApiProperty } from '@nestjs/swagger';

export class GetItemsFilterDto {
  @ApiProperty({ example: 'Вино', description: 'Поиск' })
  readonly search: string;

  @ApiProperty({
    example: 'asc',
    description: 'desc/asc Сортировка по убыванию/по возрастанию',
  })
  readonly price: string;

  @ApiProperty({
    example: true,
    description: 'Сортировка по популярности',
  })
  readonly popularity: boolean = false;

  @ApiProperty({
    example: true,
    description: 'Сортировка по новизне',
  })
  readonly news: boolean = false;
}
