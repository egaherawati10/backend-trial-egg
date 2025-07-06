import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { TransformInterceptor } from './common/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  // app.useGlobalInterceptors(new TransformInterceptor());
  app.enableCors();
  
  await app.listen(process.env.PORT ?? 3000 );
}
bootstrap();
