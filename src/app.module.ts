import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [RabbitMqModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
