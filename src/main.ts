import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder().setVersion('1.0').build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api/docs', app, document);
  await app.listen(4000, () => {
    Logger.log(`
      ################################################
      ☕️  Server listening on port: ${process.env.PORT || 4000}
      🍀 Swagger: http://localhost:${process.env.PORT || 4000}/api/docs
      ################################################
    `);
  });
}
bootstrap();
