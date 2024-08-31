import { Usuario } from "src/usuarios/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Incidencia {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    empresa: string;
    @Column({type: 'datetime'})
    horaEntrada: Date;
    @Column({type: 'datetime', nullable: true, default: null})
    horaSalida: Date;
    @Column()
    comentario: string;
    @ManyToOne(() => Usuario)
    usuario: Usuario;
    @Column()
    usuarioId: number;
    @Column({nullable: true})
    actualizacionId: number;
}
