import { DesafiosService } from './desafios.service';
import { CriarDesafioDto } from './dtos/criar-desafio.dto';
import { Desafio } from './interfaces/desafios.interface';
import { AtualizarDesafioDto } from './dtos/atualizar-desafio.dto';
import { AtribuirDesafioPartidaDto } from './dtos/atribuir-desafio-partida.dto';
export declare class DesafiosController {
    private readonly desafiosService;
    constructor(desafiosService: DesafiosService);
    private readonly logger;
    criarDesafio(criarDesafioDto: CriarDesafioDto): Promise<Desafio>;
    consultarDesafios(_id: string): Promise<Array<Desafio>>;
    atualizarDesafio(atualizarDesafioDto: AtualizarDesafioDto, _id: string): Promise<void>;
    atribuirDesafioPartida(atribuirDesafioPartidaDto: AtribuirDesafioPartidaDto, _id: string): Promise<void>;
    deletarDesafio(_id: string): Promise<void>;
}
