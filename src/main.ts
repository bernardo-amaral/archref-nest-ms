/* eslint-disable @typescript-eslint/no-floating-promises */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConsoleLogger, Logger } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'ARCHREF-MS',
      colors: true,
    }),
  });

  await app.startAllMicroservices();
  await app.listen(process.env.PORT ?? 9000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  Logger.verbose(`Application running on port ${process.env.PORT ?? 9000}`);
}
bootstrap();
