import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>
  ) {}

  async create(usuario: CreateUsuarioDto) {
    const hashContrasena = await bcrypt.hash(usuario.contrasena, 10);
    const nuevoUsuario = this.usuariosRepository.create({
      ...usuario,
      contrasena: hashContrasena
    });
    return this.usuariosRepository.save(nuevoUsuario);
  }

  async findAll(estado?: number) {
    if (estado != undefined)
      return this.usuariosRepository.find({where: {estado}});

    return this.usuariosRepository.find();
  }

  async findOne(id: number) {
    return await this.usuariosRepository.findOneBy({id});
  }

  async findOneByUsername(nombreUsuario: string): Promise<Usuario | undefined> {
    return await this.usuariosRepository.findOne({where: {nombreUsuario}});
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return this.findOne(id);
  }

  async updateEstado(id: number, estado: number) {
    await this.usuariosRepository.update(id, {estado});
    return this.usuariosRepository.findOneBy({id});
  }

  async updateContrasena(id: number, contActual: string, contNueva: string) {
    const usuario = await this.findOne(id);

    const contrasenaValid = await bcrypt.compare(contActual, usuario.contrasena);

    if (!contrasenaValid)
      throw new UnauthorizedException("Contraseña actual incorrecta");

    const hashednewCont = await bcrypt.hash(contNueva, 10);

    usuario.contrasena = hashednewCont;

    await this.usuariosRepository.save(usuario);
    return usuario;
  }

  async remove(id: number) {
    await this.usuariosRepository.delete(id);
  }
}
