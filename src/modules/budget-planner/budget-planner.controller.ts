import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { BudgetPlannerService } from './budger-planner.service';
import { Budget } from '@/entities/budget.entity';

@Controller('budget-planner')
export class BudgetPlannerController {
  constructor(private budgetPlannerService: BudgetPlannerService) {}

  @Post()
  async create(@Body() createBudgetDto: Budget, @Res() res: Response) {
    await this.budgetPlannerService.createBudget(createBudgetDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async findAll(@Res() res: Response) {
    const budgetsList = await this.budgetPlannerService.getAllBudgets();
    res.status(HttpStatus.OK).json(budgetsList ?? []);
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    const budget = await this.budgetPlannerService.getBudgetById(id);
    res.status(HttpStatus.OK).json(budget);
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
