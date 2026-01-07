import { Model } from 'mongoose';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { JogadoresService } from 'src/jogadores/jogadores.service';
import { AtualizarDesafioDto } from './dtos/atualizar-desafio.dto';
import { AtribuirDesafioPartidaDto } from './dtos/atribuir-desafio-partida.dto';
import { CategoriasService } from 'src/categorias/categorias.service';
import { Desafio, Partida } from './interfaces/desafios.interface';
export declare class DesafiosService {
    private readonly desafioModel;
    private readonly partidaModel;
    private readonly jogadoresService;
    private readonly categoriasService;
    constructor(desafioModel: Model<Desafio>, partidaModel: Model<Partida>, jogadoresService: JogadoresService, categoriasService: CategoriasService);
    private readonly logger;
    criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<Desafio>;
    consultarTodosDesafios(): Promise<Array<Desafio>>;
    consultarDesafiosDeUmJogador(_id: any): Promise<Array<Desafio>>;
    atualizarDesafio(_id: string, atualizarDesafioDto: AtualizarDesafioDto): Promise<void>;
    atribuirDesafioPartida(_id: string, atribuirDesafioPartidaDto: AtribuirDesafioPartidaDto): Promise<void>;
    deletarDesafio(_id: string): Promise<void>;
}
