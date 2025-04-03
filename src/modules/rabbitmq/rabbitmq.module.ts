import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { queueOptions } from './queue-options';

@Module({
  imports: [
    ClientsModule.register([queueOptions.requestOrder])
  ],
  controllers: [RabbitmqController],
  providers: [],
})
export class RabbitMqModule {}
