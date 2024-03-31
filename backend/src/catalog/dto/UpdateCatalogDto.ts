import { ApiProperty } from '@nestjs/swagger';

export class UpdateCatalogDto {
  @ApiProperty({
    example: 'Шато Марго 1958',
    description: 'Название',
    required: false,
  })
  readonly title: string;
}
