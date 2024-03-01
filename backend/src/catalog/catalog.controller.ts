import { Controller, Get } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('api/catalog')
export class CatalogController {
  constructor(private catalogService: CatalogService) {}

  @ApiOperation({ summary: 'Получить все категории' })
  @Get()
  @ApiResponse({ status: 200, type: Object })
  getItems() {
    return this.catalogService.getAllCatalog();
  }
}
