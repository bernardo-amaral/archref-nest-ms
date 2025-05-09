import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Budget } from '@/entities/budget.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BudgetPlannerService {
  constructor(
    @InjectRepository(Budget)
    private readonly budgetRepository: Repository<Budget>,
  ) {}

  createBudget(createBudgetDto: Budget): Promise<Budget> {
    const budget: Budget = new Budget();
    budget.description = createBudgetDto.description;
    budget.initDate = createBudgetDto.initDate;
    budget.endDate = createBudgetDto.endDate;

    return this.budgetRepository.save(budget);
  }

  getAllBudgets(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

  getBudgetById(id: number): Promise<Budget | null> {
    const budgetData = this.budgetRepository.findOne({ where: { id } });
    return budgetData;
  }
}
