import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cors({
    origin: 'http://192.168.1.177:8082',
    credentials: true
  }));
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUnitialized: false,
      cookie: { maxAge: 3600000 }
    })
  );
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3002);
}
bootstrap();
