import { Body, Controller, Delete, Get, Post, Param, Query, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';
import { Jogador } from './interfaces/jogador.interface';
import { JogadorValidaParametrosPipe } from './pipes/jogadores-valida-parametros.pipe';
import { AtualizarJogadorDto } from './dtos/atualizar-jogador.dto';


@Controller('api/v1/jogadores')
export class JogadoresController {

    constructor(
        private readonly jogadoresService: JogadoresService
    ) {
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    async criarJogador(
        @Body() criarJogadorDto: CriarJogadorDto
    ): Promise<Jogador> {
        
       return await this.jogadoresService.criar(criarJogadorDto);
    }

    @Put('/:_id')
    @UsePipes(ValidationPipe)
    async atualizarJogador(
        @Body() atualizarJogadorDto: AtualizarJogadorDto,
        @Param('_id', JogadorValidaParametrosPipe) _id: string
    ): Promise<void> {
        await this.jogadoresService.atualizarJogador(_id, atualizarJogadorDto);
    }

    @Get()
    async consultarTodosJogadores(): Promise<Jogador[]> {
            return await this.jogadoresService.consultarTodosJogadores()
    }

    @Get('/:_id')
    async consultarJogadorPeloId(
        @Param('_id', JogadorValidaParametrosPipe) _id:string
    ): Promise<Jogador> {

            const jogador = await this.jogadoresService.consultarJogadorPeloId(_id); 

            return jogador;

    }

    @Delete('/:_id')
    async deletarJogador(
        @Param('_id', JogadorValidaParametrosPipe) _id: string
    ): Promise<void>{
        this.jogadoresService.deletarJogador(_id);
    }
}


