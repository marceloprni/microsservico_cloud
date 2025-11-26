import { CriarJogadorDto } from './dtos/criar-jogador.dto';
export declare class JogadoresService {
    private jogadores;
    private readonly logger;
    criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void>;
    private criar;
}
