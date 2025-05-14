/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateCondominiumDto } from './dto/create-condominium.dto';
import { UpdateCondominiumDto } from './dto/update-condominium.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Condominium } from '@/entities/condominium.entity';

@Injectable()
export class CondominiumsService {
  constructor(
    @InjectRepository(Condominium)
    private readonly condominiumRepository: Repository<Condominium>,
  ) {}

  create(createCondominiumDto: any) {
    const condominium: Condominium = new Condominium();
    condominium.description = createCondominiumDto.description;
    condominium.address = createCondominiumDto.address;
    condominium.city = createCondominiumDto.city;

    return this.condominiumRepository.save(condominium);
  }

  findAll() {
    return this.condominiumRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} condominium`;
  }

  update(id: number, _updateCondominiumDto: UpdateCondominiumDto) {
    return `This action updates a #${id} condominium`;
  }

  remove(id: number) {
    return `This action removes a #${id} condominium`;
  }
}
