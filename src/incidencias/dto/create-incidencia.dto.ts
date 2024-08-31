import { Transform } from "class-transformer";
import { IsNotEmpty, IsString, Matches } from "class-validator";

export class CreateIncidenciaDto {
    id: number;
    @IsString()
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {message: "El nombre no debe tener números"})
    @IsNotEmpty()
    nombre: string;
    @IsString()
    empresa: string;
    @IsNotEmpty()
    horaEntrada: Date;
    @IsString()
    comentario: string;
    usuarioId: number;
    actualizacionId: number;
}
