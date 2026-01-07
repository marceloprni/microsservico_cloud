import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { Categoria } from './interfaces/categoria.interface';
import { CategoriasService } from './categorias.service';
import { atualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
export declare class CategoriasController {
    private readonly categoriasService;
    constructor(categoriasService: CategoriasService);
    criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria>;
    consultarCategorias(): Promise<Categoria[]>;
    consultarCategoriasPeloId(categoria: string): Promise<Categoria>;
    atualziarCategoria(atualizarCategoriaDto: atualizarCategoriaDto, categoria: string): Promise<void>;
    atribuirCategoriaJogador(params: string[]): Promise<void>;
}
