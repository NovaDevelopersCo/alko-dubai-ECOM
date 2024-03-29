import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT) || 5000;

  app.enableCors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('alko-dubai-ECOM')
    .setVersion('1.1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(PORT, () => {
    console.log(`Server run on http://localhost:${PORT}`),
      console.log(`Docs on http://localhost:${PORT}/api/docs`),
      console.log(`Adminjs on http://localhost:${PORT}/admin`);
  });
}

start();
