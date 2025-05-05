import { Module } from '@nestjs/common';
import { BudgetPlannerController } from './budget-planner.controller';

@Module({
  imports: [],
  controllers: [BudgetPlannerController],
  providers: [],
  exports: [],
})
export class BudgetPlannerModule {}
