import { Controller, Get, Param, Patch } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Catalog } from './catalog.model';

@ApiTags('Catalog')
@Controller('api/catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @ApiOperation({ summary: 'Получить все категории' })
  @Get()
  @ApiResponse({ status: 200, type: Object })
  getItems() {
    return this.catalogService.getAllCatalog();
  }

  @ApiOperation({ summary: 'Получить категорию по названию' })
  @Get('/:title')
  @ApiResponse({ status: 200, type: Catalog })
  getByValue(@Param('title') title: string) {
    return this.catalogService.getCatalogByName(title);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
}
