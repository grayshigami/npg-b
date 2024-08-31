import { Transform } from "class-transformer";
import { IsNotEmpty, Matches } from "class-validator";

export class UpdateIncidenciaDto {
    id: number;
    @IsNotEmpty()
    @Transform(({value}) => value?.trim())
    @Matches(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/)
    nombre?: string;
    @Transform(({value}) => value?.trim())
    empresa?: string;
    @Transform(({value}) => value?.trim())
    comentario?: string;
    usuarioId?: number;
    actualizacionId?: number;
}
