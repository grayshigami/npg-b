import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column({nullable: true})
    apellido: string;
    @Column({unique: true})
    nombreUsuario: string;
    @Column({unique: true, nullable: true})
    correo: string;
    @Column()
    contrasena: string;
    @Column({type: 'int', default: 0})
    tipoUsuario: number;
    @CreateDateColumn({type: 'datetime', default: () => 'GETDATE()'})
    horaRegistro: Date;
    @CreateDateColumn({type: 'datetime', default: () => 'GETDATE()'})
    horaActualizacion: Date;
    @Column({default: 1})
    estado: number;
    @Column()
    registroId: number;
    @Column()
    actualizacionId: number;
}
