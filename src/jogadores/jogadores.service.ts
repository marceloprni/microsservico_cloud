import { Injectable, Logger } from '@nestjs/common';
import { CriarJogadorDto } from './dtos/criar-jogador.dto';
import { Jogardor } from './interfaces/jogador.interface';
import { randomUUID } from 'node:crypto';

@Injectable()
export class JogadoresService {

    private jogadores: Jogardor[] = [];

    private readonly logger = new Logger(JogadoresService.name);

    async criarAtualizarJogador(criarJogadorDto: CriarJogadorDto): Promise<void> {
        this.logger.log(`criarAtualizarJogador: ${JSON.stringify(criarJogadorDto)}`);
        await this.criar(criarJogadorDto);
    }

    private criar(criarJogadorDto: CriarJogadorDto): void {
        const { nome, telefoneCelular, email } = criarJogadorDto;
        const jogador: Jogardor = {
            _id: randomUUID(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'https://www.google.com.br'
        }
        this.logger.log(`criarAtualizarJogador: ${JSON.stringify(jogador)}`);
        this.jogadores.push(jogador);
    }
}
