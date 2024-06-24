import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Incidencia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    horaEntrada: string;
    @Column()
    horaSalida: string;
    @Column()
    comentario: string;
    @ManyToOne(() => Usuario)
    usuario: Usuario;
}
