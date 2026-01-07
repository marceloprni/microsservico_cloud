import { BadRequestException, Injectable } from '@nestjs/common';
import { Categoria } from './interfaces/categoria.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';
import { atualizarCategoriaDto } from './dtos/atualizar-categoria.dto';
import { JogadoresService } from 'src/jogadores/jogadores.service';

@Injectable()
export class CategoriasService {

    constructor(
        @InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>,
        private readonly jogadoresService: JogadoresService,
    ) {}

    async criarCategoria(criarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {

        const { categoria } = criarCategoriaDto;
        console.log(categoria);

        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();

        console.log(categoriaEncontrada);
        if (categoriaEncontrada) {
            throw new BadRequestException(`Categoria ${categoria} já cadastrada`);
        }   

        const categoria1 = new this.categoriaModel(criarCategoriaDto);
        return await categoria1.save();
    }

    async consultarCategorias(): Promise<Categoria[]> {
        //return await this.categoriaModel.find().exec();

         return await this.categoriaModel.find().populate("jogadores").exec();
    }
    
    async consultarCategoriaPeloId(categoria: string): Promise<Categoria> {
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
         
        if(!categoriaEncontrada) {
            throw new BadRequestException(`Categoria ${categoria} não encontrada`);
        }

        return categoriaEncontrada;
    }

    async atualizarCategoria(categoria: string, atualizarCategoriaDto: atualizarCategoriaDto): Promise<void> {

        console.log(categoria);
        console.log(atualizarCategoriaDto);

        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();    

        if(!categoriaEncontrada) {
            throw new BadRequestException(`Categoria ${categoria} não encontrada!`);
        }

        await this.categoriaModel.findOneAndUpdate(
            { categoria: categoria },
            { $set: atualizarCategoriaDto }
        ).exec();
    }

    async consultarCategoriaDoJogador(idJogador: any): Promise<Categoria> {
                                 

       const jogadores = await this.jogadoresService.consultarTodosJogadores()

       const jogadorFilter = jogadores.filter( jogador => jogador._id == idJogador )

       if (jogadorFilter.length == 0) {
           throw new BadRequestException(`O id ${idJogador} não é um jogador!`)
       }

       const categoriaEncontrada = await this.categoriaModel.findOne().where('jogadores').in(idJogador).exec();

       if (!categoriaEncontrada) {
           throw new BadRequestException(`Categoria não encontrada para o jogador ${idJogador}`);
       }

       return categoriaEncontrada;

    }


    async atribuirCategoriaJogador(params: string[]): Promise<void> {
        const categoria = params['categoria'];
        const idJogador = params['idJogador'];

        await this.jogadoresService.consultarJogadorPeloId(idJogador);

        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();   

        const jogadorJaCadastradoNaCategoria = await this.categoriaModel.find(
            { categoria: categoria}
        ).where('jogadores').in(idJogador).exec();

        

        if(!categoriaEncontrada) {
            throw new BadRequestException(`Categoria ${categoria} não encontrada!`);
        }  

        if(jogadorJaCadastradoNaCategoria.length > 0) {
            throw new BadRequestException(`Jogador ${idJogador} já cadastrado na categoria ${categoria}`);
        }

        categoriaEncontrada.jogadores.push(idJogador);

        await this.categoriaModel.findOneAndUpdate(
            { categoria: categoria },
            { $set: categoriaEncontrada }
        ).exec();
    }

}
