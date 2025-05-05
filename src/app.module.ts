import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BudgetPlannerModule } from '@modules/budget-planner/budget-planner.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env',
        'local.env',
        'develop.env',
        'homolog.env',
        'prod.env',
      ],
    }),
    BudgetPlannerModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
