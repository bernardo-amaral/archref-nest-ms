import { Inject, Injectable, Logger } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  private readonly logger = new Logger(RabbitMQService.name);

  constructor(
    @Inject('RMQ_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  async send(eventName: any, payload: object) {
    return lastValueFrom(this.client.send(eventName, payload)).then((error) =>
      this.logger.error(error),
    );
  }
}
