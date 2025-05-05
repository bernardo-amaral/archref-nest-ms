import { Controller, Inject, Logger } from '@nestjs/common';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { queueOptions } from './queue-options';

@Controller()
export class RabbitmqController {
  constructor(
    @Inject(queueOptions.requestOrder.name)
    private requestOrderQueue: ClientProxy
  ) {}

  @EventPattern(RCV_ORDER_PATTERN)
  async receiveOrderEvent(
    @Payload() orderPayload: OrderPayload,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      Logger.debug(responseData);

      channel.ack(originalMsg);
    } catch (error: any) {
      channel.reject(originalMsg, false);
    }
  }
}
