export class UpdateUsuarioDto {
    id: number;
    nombre?: string;
    apellido?: string;
    nombreUsuario?: string;
    correo?: string;
    contrasena?: string;
    tipoUsuario?: number;
    horaRegistro?: string;
    horaActualizacion?: string;
    estado?: number;
}
