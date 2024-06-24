import { Injectable } from '@nestjs/common';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Incidencia } from './entities/incidencia.entity';

@Injectable()
export class IncidenciasService {
  constructor(
    @InjectRepository(Incidencia)
    private incidenciasRepository: Repository<Incidencia>
  ) {}

  async create(createIncidenciaDto: CreateIncidenciaDto) {
    const incidencia = this.incidenciasRepository.create(createIncidenciaDto);
    return await this.incidenciasRepository.save(incidencia);
  }

  async findAll() {
    return await this.incidenciasRepository.find({relations: ['usuario']});
  }

  async findOne(id: number) {
    return await this.incidenciasRepository.findOne({where: {id}, relations: ['usuario']});
  }

  async update(id: number, updateIncidenciaDto: UpdateIncidenciaDto) {
    await this.incidenciasRepository.update(id, updateIncidenciaDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.incidenciasRepository.delete(id);
  }
}
