import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    nombreUsuario: string;
    @Column()
    correo: string;
    @Column()
    contrasena: string;
    @Column()
    tipoUsuario: number;
    @Column()
    horaRegistro: string;
    @Column()
    horaActualizacion: string;
    @Column({default: 1})
    estado: number;
}
