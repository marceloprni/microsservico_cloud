"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JogadoresService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadoresService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let JogadoresService = JogadoresService_1 = class JogadoresService {
    jogadorModel;
    constructor(jogadorModel) {
        this.jogadorModel = jogadorModel;
    }
    logger = new common_1.Logger(JogadoresService_1.name);
    async atualizarJogador(_id, atualizarJogadorDto) {
        try {
            const jogadorEncontrado = await this.jogadorModel.findOne({ _id }).exec();
            if (!jogadorEncontrado) {
                throw new common_1.NotFoundException(`Não foi possível atualizar o cadastro do jogador.`);
            }
            await this.jogadorModel.findOneAndUpdate({ _id: _id }, { $set: atualizarJogadorDto }).exec();
        }
        catch (error) {
            if (error instanceof mongoose_2.default.Error.CastError && error.path === '_id') {
                throw new common_1.BadRequestException(`ID inválido: ${_id}`);
            }
            throw error;
        }
    }
    async criar(criarJogadorDto) {
        const { email } = criarJogadorDto;
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com email ${email} já cadastrado`);
        }
        const jogador = new this.jogadorModel(criarJogadorDto);
        console.log('Jogador criado com sucesso');
        console.log(jogador);
        return await jogador.save();
    }
    async consultarTodosJogadores() {
        return await this.jogadorModel.find().exec();
    }
    async consultarJogadoresEmail(email) {
        const jogadorEncontrado = await this.jogadorModel.findOne({ email }).exec();
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com email não entrontrado`);
        }
        return jogadorEncontrado;
    }
    async consultarJogadorPeloId(_id) {
        const jogadorEncontrado = await this.jogadorModel.findById(_id).exec();
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com id não entrontrado`);
        }
        return jogadorEncontrado;
    }
    async deletarJogador(_id) {
        const jogadorEncontrado = await this.jogadorModel.findOneAndDelete({ _id }).exec();
        if (!jogadorEncontrado) {
            throw new common_1.NotFoundException(`Jogador com id não encontrado`);
        }
        else {
            return {
                jogadorDeletado: 'Jogador deletado com sucesso'
            };
        }
    }
};
exports.JogadoresService = JogadoresService;
exports.JogadoresService = JogadoresService = JogadoresService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Jogador')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], JogadoresService);
//# sourceMappingURL=jogadores.service.js.map