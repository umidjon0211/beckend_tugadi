import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './common/config/swagger.set-up';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }));

  await setupSwagger(app);

  await app.listen(process.env.PORT ?? 5910,() => console.log(`running on ${process.env.PORT}`));
}
bootstrap();
