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
}
