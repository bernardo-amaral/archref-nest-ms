import { Inject, Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);

  constructor(
    @Inject('RMQ_SERVICE')
    private readonly recurringClient: ClientProxy,
  ) {}

  async sendMessage(eventName: any, payload: object) {
    try {
      await lastValueFrom(this.recurringClient.send(eventName, payload));
      //await lastValueFrom(this.recurringClient.emit(eventName, payload));
    } catch (error: any) {
      this.logger.error(
        `Problem with RMQ in ${eventName} error: ${JSON.stringify(error)}`,
      );
    }
  }
}
