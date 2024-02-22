import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(AppModule);
  const PORT = Number(process.env.PORT) || 5000;

  const config = new DocumentBuilder()
    .setTitle('alko-dubai-ECOM')
    .setVersion('1.0.0')
    .addTag('alko-dubai')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () =>
    console.log(`Server run on http://localhost:${PORT}`),
  );
}

start();
