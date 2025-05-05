/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { queueOptions } from './modules/rabbitmq/queue-options';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'ARCHREF-MS',
      colors: true,
    }),
  });

  app.connectMicroservice(queueOptions.requestOrder);

  app.connectMicroservice(queueOptions.requestOrderDlx);

  await app.startAllMicroservices();
}
bootstrap();
