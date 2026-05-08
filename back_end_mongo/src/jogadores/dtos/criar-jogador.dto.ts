import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CriarJogadorDto {

    @IsString()
    @IsNotEmpty()
    readonly telefoneCelular: string;

    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @IsString()
    @IsNotEmpty()
    readonly nome: string;
}