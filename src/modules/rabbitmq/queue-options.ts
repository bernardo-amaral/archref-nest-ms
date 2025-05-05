import {
  ClientProviderOptions,
  RmqOptions,
  Transport,
} from '@nestjs/microservices';

const nfseQueue = 'nfse-queue';
const nfseDlxQueue = 'nfse-dlx-queue';

const rmqOptions: RequestOrderOptions = {
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672/local'],
  },
};

const requestOrder: ClientProviderOptions = {
  ...rmqOptions,
  name: requestOrderQueue,
  options: {
    ...rmqOptions.options,
    queue: requestOrderQueue,
    noAck: false,
    queueOptions: {
      deadLetterExchange: '',
      deadLetterRoutingKey: requestOrderDlxQueue,
      messageTtl: 4000,
    },
  },
};

const requestOrderDlx: ClientProviderOptions = {
  ...rmqOptions,
  name: requestOrderDlxQueue,
  options: {
    ...rmqOptions.options,
    queue: requestOrderDlxQueue,
    noAck: false,
  },
};

export const queueOptions = {
  requestOrder,
  requestOrderDlx,
};
