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
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'api-queue',
          queueOptions: {
            durable: false,
            exchange: {
              name: 'api-queue-exchange',
              type: 'fanout',
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
