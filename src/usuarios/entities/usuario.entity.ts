import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column({nullable: true})
    apellido: string;
    @Column()
    nombreUsuario: string;
    @Column({nullable: true})
    correo: string;
    @Column()
    contrasena: string;
    @Column()
    tipoUsuario: number;
    @CreateDateColumn({type: 'datetime', default: () => 'GETDATE()'})
    horaRegistro: Date;
    @CreateDateColumn({type: 'datetime', default: () => 'GETDATE()'})
    horaActualizacion: Date;
    @Column({default: 1})
    estado: number;
}
