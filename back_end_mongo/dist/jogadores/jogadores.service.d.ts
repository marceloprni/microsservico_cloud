import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';
export declare class JogadoresService {
    private readonly jogadorModel;
    constructor(jogadorModel: Model<Jogador>);
    private readonly logger;
    atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void>;
    criar(criarJogadorDto: CriarJogadorDto): Promise<Jogador>;
    consultarTodosJogadores(): Promise<Jogador[]>;
    consultarJogadoresEmail(email: string): Promise<Jogador>;
    consultarJogadorPeloId(_id: string): Promise<Jogador>;
    deletarJogador(_id: string): Promise<{
        jogadorDeletado: string;
    }>;
}
