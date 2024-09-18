import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    nombres: string;
    
    @Column({length: 120})
    primer_apellido: string;
    
    @Column({length: 120})
    segundo_apellido: string;
    
    @Column()
    fechaNacimiento: Date;
}
