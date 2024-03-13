import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ItemsModule } from './items/items.module';
import { Items } from './items/items.model';
import { FilesModule } from './files/files.module';
import { OrderModule } from './order/order.module';
import { Order } from './order/order.model';
import { MailerModule } from '@nestjs-modules/mailer';
import { CatalogModule } from './catalog/catalog.module';
import { Catalog } from './catalog/catalog.model';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
      models: [Items, Order],
      autoLoadModels: true,
      synchronize: true,
    }),
    MailerModule.forRoot({
      transport: {
        service: process.env.MAIL_HOST,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
    }),
    (async () => {
      const AdminModule = (await import('@adminjs/nestjs')).AdminModule;
      const AdminJSSequelize = (await import('@adminjs/sequelize')).default;
      const AdminJS = (await import('adminjs')).default; // Dynamic import AdminJS
      AdminJS.registerAdapter({
        Resource: AdminJSSequelize.Resource,
        Database: AdminJSSequelize.Database,
      });

      return AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [Items, Order, Catalog],
          },
          auth: {
            authenticate,
            cookieName: 'adminjs',
            cookiePassword: 'secret',
          },
          sessionOptions: {
            resave: true,
            saveUninitialized: true,
            secret: 'secret',
          },
        }),
      });
    })(),
    ItemsModule,
    FilesModule,
    OrderModule,
    CatalogModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
