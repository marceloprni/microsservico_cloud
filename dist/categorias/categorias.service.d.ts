import { Categoria } from './interfaces/categoria.interface';
import { Model } from 'mongoose';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { atualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { JogadoresService } from 'src/jogadores/jogadores.service';
export declare class CategoriasService {
    private readonly categoriaModel;
    private readonly jogadoresService;
    constructor(categoriaModel: Model<Categoria>, jogadoresService: JogadoresService);
    criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria>;
    consultarCategorias(): Promise<Categoria[]>;
    consultarCategoriaPeloId(categoria: string): Promise<Categoria>;
    atualizarCategoria(categoria: string, atualizarCategoriaDto: atualizarCategoriaDto): Promise<void>;
    consultarCategoriaDoJogador(idJogador: any): Promise<Categoria>;
    atribuirCategoriaJogador(params: string[]): Promise<void>;
}
