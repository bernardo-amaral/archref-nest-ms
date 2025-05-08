import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from '@/entities/budget.entity';
import { BudgetPlannerController } from './budget-planner.controller';
import { BudgetPlannerService } from './budger-planner.service';

@Module({
  imports: [TypeOrmModule.forFeature([Budget])],
  controllers: [BudgetPlannerController],
  providers: [BudgetPlannerService],
  exports: [],
})
export class BudgetPlannerModule {}
