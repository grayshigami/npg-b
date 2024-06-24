export class CreateUsuarioDto {
    id: number;
    nombre: string;
    apellido?: string;
    nombreUsuario: string;
    correo?: string;
    contrasena: string;
    tipoUsuario: number;
    estado: number;
}
