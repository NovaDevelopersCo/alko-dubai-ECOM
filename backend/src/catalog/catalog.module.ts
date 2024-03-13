import { Module } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { ItemsModule } from 'src/items/items.module';
import { FilesModule } from 'src/files/files.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Catalog } from './catalog.model';

@Module({
  providers: [CatalogService],
  controllers: [CatalogController],
  imports: [ItemsModule, FilesModule, SequelizeModule.forFeature([Catalog])],
})
export class CatalogModule {}
