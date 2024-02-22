import { ApiProperty } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'Почтовый адрес' })
  readonly title: string;

  @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
  readonly description: string;

  @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
  readonly category: string;

  @ApiProperty({ example: '12345', description: 'Пароль пользователя' })
  readonly price: number;
}
