import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import * as bcrypt from 'bcryptjs';
import { UpdateContrasenaDto } from 'src/usuarios/dto/update-contrasena.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService
    ) {}

    async login(nombreUsuario: string, cont: string) {
        const usuario = await this.usuariosService.findOneByUsername(nombreUsuario);

        if (usuario && await bcrypt.compare(cont, usuario.contrasena)) {
            const payload = { sub: usuario.id, nombreUsuario: usuario.nombreUsuario };
            return {
                access_token: await this.jwtService.signAsync(payload),
                user_id: usuario.id,
                user_type: usuario.tipoUsuario,
                name: usuario.nombre,
                register_id: usuario.registroId
            };
        }

        throw new UnauthorizedException();
    }

    async updateContrasena(id: number, updateContrasenaDto: UpdateContrasenaDto) {
        const { actual, nueva } = updateContrasenaDto;
        await this.usuariosService.updateContrasena(id, actual, nueva);
    }
}
