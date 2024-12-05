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

  async send(pattern: string, data: any) {
    return lastValueFrom(this.client.send(pattern, data)).then((error) =>
      this.logger.error(error),
    );
  }
}
