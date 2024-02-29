import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ItemsModule } from 'src/items/items.module';

@Module({
  providers: [CatalogService],
  controllers: [CatalogController],
  imports: [ItemsModule],
})
export class CatalogModule {}
