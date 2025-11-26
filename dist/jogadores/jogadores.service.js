"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const node_crypto_1 = require("node:crypto");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    jogadores = [];
    logger = new common_1.Logger(JogadoresService_1.name);
    async criarAtualizarJogador(criarJogadorDto) {
        this.logger.log(`criarAtualizarJogador: ${JSON.stringify(criarJogadorDto)}`);
        await this.criar(criarJogadorDto);
    }
    criar(criarJogadorDto) {
        const { nome, telefoneCelular, email } = criarJogadorDto;
        const jogador = {
            _id: (0, node_crypto_1.randomUUID)(),
            nome,
            telefoneCelular,
            email,
            ranking: 'A',
            posicaoRanking: 1,
            urlFotoJogador: 'https://www.google.com.br'
        };
        this.logger.log(`criarAtualizarJogador: ${JSON.stringify(jogador)}`);
        this.jogadores.push(jogador);
    }
};
exports.JogadoresService = JogadoresService;
exports.JogadoresService = JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)()
], JogadoresService);
//# sourceMappingURL=jogadores.service.js.map