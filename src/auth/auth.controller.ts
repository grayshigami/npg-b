import { Body, Controller, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UpdateContrasenaDto } from 'src/usuarios/dto/update-contrasena.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.login(signInDto.nombreUsuario, signInDto.contrasena);
    }

    @Patch('update-contrasena/:id')
    async updateContrasena(@Param('id') id: number, @Body() updateContrasenaDto: UpdateContrasenaDto) {
        return this.authService.updateContrasena(id, updateContrasenaDto);
    }
}
