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
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([]);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
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
