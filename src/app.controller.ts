import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMQService } from './rabbitmq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly rabbitMQService: RabbitMQService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    this.rabbitMQService.send('api-queue', { msg: '🐱' });
    return 'Message sent to the queue!';
  }
}
