import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateUsuarioDto {
    id: number;
    @IsString()
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {message: "El nombre no debe tener números"})
    @IsNotEmpty()
    nombre: string;
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {message: "El nombre no debe tener números"})
    apellido?: string;
    @IsString()
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    nombreUsuario: string;
    @IsEmail()
    @Transform(({value}) => value?.trim())
    correo?: string;
    @IsString()
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    contrasena: string;
    @IsNotEmpty()
    tipoUsuario: number;
    estado: number;
    registroId: number;
}
