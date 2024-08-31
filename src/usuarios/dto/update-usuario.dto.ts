import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class UpdateUsuarioDto {
    @IsOptional()
    @IsString()
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {message: "El nombre no debe tener números"})
    @IsNotEmpty()
    nombre?: string;
    @IsOptional()
    @IsString()
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {message: "El apellido no debe tener números"})
    @IsNotEmpty()
    apellido?: string;
    @IsOptional()
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    nombreUsuario?: string;
    @IsOptional()
    @IsEmail()
    @Transform(({value}) => value?.trim())
    correo?: string;
    @IsOptional()
    @Transform(({value}) => value?.trim())
    @IsNotEmpty()
    contrasena?: string;
    @IsOptional()
    tipoUsuario?: number;
    estado?: number;
    actualizacionId?: number;
}
