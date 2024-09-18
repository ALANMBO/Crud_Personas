import { IsNumber, IsString, IsDate } from "class-validator";

export class CreatePersonaDto {

    @IsNumber()
    ci: number;
    
    @IsString()
    nombres: string;

    @IsString()
    primer_apellido: string;

    @IsString()
    segundo_apellido: string;
    

    @IsDate()
    fechaNacimiento: Date;
}
