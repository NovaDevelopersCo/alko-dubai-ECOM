import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

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
  @Get('/:name')
  @ApiResponse({ status: 200, type: Object })
  getByValue(@Param('name') name: string) {
    return this.catalogService.getCatalogByName(name);
  }
}
