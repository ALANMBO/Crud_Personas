import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Persona } from './entities/persona.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PersonasService {
  constructor(
    @InjectRepository(Persona) 
    private  personasRepository: Repository <Persona>
  ) {}
  create(createPersonaDto: CreatePersonaDto) {
    return this.personasRepository.save(createPersonaDto);
  }

  findAll() {
    return this.personasRepository.find();
  }

  findOne(id: number) {
    return this.personasRepository.findOneBy({ id });
  }

  update(id: number, updatePersonaDto: UpdatePersonaDto) {
    return this.personasRepository.update(id, updatePersonaDto);
  }

  remove(id: number) {
    return this.personasRepository.delete(id);
  }
}
