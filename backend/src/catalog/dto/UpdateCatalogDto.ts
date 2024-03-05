import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateCatalogDto {
  @IsNotEmpty()
  @ApiProperty({
    example: 'Шато Марго 1958',
    description: 'Название',
    required: true,
  })
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 1560,
    description: 'Количество товаров с категорией',
    required: true,
  })
  readonly items: number;
}
