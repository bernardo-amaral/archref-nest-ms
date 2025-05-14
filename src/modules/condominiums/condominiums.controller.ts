import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { CondominiumsService } from './condominiums.service';
import { CreateCondominiumDto } from './dto/create-condominium.dto';
import { UpdateCondominiumDto } from './dto/update-condominium.dto';

@Controller('condominiums')
export class CondominiumsController {
  constructor(private readonly condominiumsService: CondominiumsService) {}

  @Post()
  create(@Body() createCondominiumDto: CreateCondominiumDto) {
    return this.condominiumsService.create(createCondominiumDto);
  }

  @Get()
  findAll(@Res() res: Response) {
    const condominiunsList = this.condominiumsService.findAll();
    res.status(HttpStatus.OK).json(condominiunsList ?? []);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.condominiumsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCondominiumDto: UpdateCondominiumDto,
  ) {
    return this.condominiumsService.update(+id, updateCondominiumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.condominiumsService.remove(+id);
  }
}
