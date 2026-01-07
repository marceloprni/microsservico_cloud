import { IsString, IsNotEmpty } from 'class-validator';

export class AtualizarJogadorDto {

    @IsString()
    @IsNotEmpty()
    readonly telefoneCelular: string;

    @IsString()
    @IsNotEmpty()
    readonly nome: string;
}