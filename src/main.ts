import { NestFactory } from '@nestjs/core';
// import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://localhost:5672'],
  //     queue: 'cats_queue',
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // });

  // await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
