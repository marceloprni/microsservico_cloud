import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { AllExceptionsFilter } from './common/filter/http-exception.filter';
import * as momentTime from 'moment-timezone';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionsFilter());

  Date.prototype.toJSON = function(): any {
    return momentTime(this)
    .tz('America/Sao_Paulo')
    .format('YYYY-MM-DD HH:mm:ss');
  }

  await app.listen(process.env.PORT ?? 8085);
}
bootstrap();
