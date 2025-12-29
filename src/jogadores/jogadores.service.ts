import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogador } from './interfaces/jogador.interface';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';

@Injectable()
export class JogadoresService {

    constructor(@InjectModel('Jogador') private readonly jogadorModel: Model<Jogador>) {}

    private readonly logger = new Logger(JogadoresService.name);


    async atualizarJogador(_id: string, atualizarJogadorDto: AtualizarJogadorDto): Promise<void> {
      
       try {


        const jogadorEncontrado = await this.jogadorModel.findOne({ _id }).exec();

        if (!jogadorEncontrado) {
          throw new NotFoundException(`Não foi possível atualizar o cadastro do jogador.`);
        }

        await this.jogadorModel.findOneAndUpdate(
          { _id: _id },
          { $set: atualizarJogadorDto }
        ).exec();

        } catch (error) {
          if (error instanceof mongoose.Error.CastError && error.path === '_id') {
            throw new BadRequestException(`ID inválido: ${_id}`);
          }
          throw error; // Re-lança erros não tratados
        }
    }

    async criar(criarJogadorDto: CriarJogadorDto): Promise<Jogador> {

        const { email } = criarJogadorDto;

       const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();

       if(jogadorEncontrado) {
            throw new NotFoundException(`Jogador com email ${email} já cadastrado`);
        }  

        const jogador = new this.jogadorModel(criarJogadorDto);


        return await jogador.save();    

    }

    async consultarTodosJogadores(): Promise<Jogador[]> {

        return await this.jogadorModel.find().exec();
    }


    async consultarJogadoresEmail(email: string): Promise<Jogador>{
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();

        if(!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com email não entrontrado`)
        }
        return jogadorEncontrado
    }

    async consultarJogadorPeloId(_id: string): Promise<Jogador>{
        const jogadorEncontrado = await this.jogadorModel.findById(_id).exec();

        if(!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com id não entrontrado`)
        }

        return jogadorEncontrado
    }

    async deletarJogador(_id: string): Promise<{jogadorDeletado: string}> {
        const jogadorEncontrado = await this.jogadorModel.findOneAndDelete({ _id }).exec();

        if(!jogadorEncontrado) {
            throw new NotFoundException(`Jogador com id não encontrado`);
        } else {
            return {
                jogadorDeletado: 'Jogador deletado com sucesso'
            }
        }
    }

    
}
