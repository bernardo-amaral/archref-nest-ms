import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMQService } from './rabbitmq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RMQ_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672/local'],
          queue: 'api-queue',
          queueOptions: {
            durable: true,
            deadLetterExchange: 'api-queue-dlx',
            exchange: {
              name: 'api-queue-exchange',
              type: 'direct',
              echangeOpts: {
                durable: true,
              },
            },
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService, RabbitMQService],
  exports: [RabbitMQService],
})
export class AppModule {}
