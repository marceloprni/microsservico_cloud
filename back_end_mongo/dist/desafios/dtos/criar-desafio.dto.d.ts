import { Jogador } from 'src/jogadores/interfaces/jogador.interface';
export declare class CriarDesafioDto {
    dataHoraDesafio: Date;
    solicitante: Jogador;
    jogadores: Array<Jogador>;
}
