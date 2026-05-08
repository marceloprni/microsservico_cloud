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
var DesafiosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesafiosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const jogadores_service_1 = require("../jogadores/jogadores.service");
const desafio_status_enum_1 = require("./interfaces/desafio-status.enum");
const categorias_service_1 = require("../categorias/categorias.service");
let DesafiosService = DesafiosService_1 = class DesafiosService {
    desafioModel;
    partidaModel;
    jogadoresService;
    categoriasService;
    constructor(desafioModel, partidaModel, jogadoresService, categoriasService) {
        this.desafioModel = desafioModel;
        this.partidaModel = partidaModel;
        this.jogadoresService = jogadoresService;
        this.categoriasService = categoriasService;
    }
    logger = new common_1.Logger(DesafiosService_1.name);
    async criarDesafio(criarDesafioDto) {
        const jogadores = await this.jogadoresService.consultarTodosJogadores();
        criarDesafioDto.jogadores.map(jogadorDto => {
            const jogadorFilter = jogadores.filter(jogador => jogador._id == jogadorDto._id);
            if (jogadorFilter.length == 0) {
                throw new common_1.BadRequestException(`O id ${jogadorDto._id} não é um jogador!`);
            }
        });
        const solicitanteEhJogadorDaPartida = await criarDesafioDto.jogadores.filter(jogador => jogador._id == criarDesafioDto.solicitante._id);
        this.logger.log(`solicitanteEhJogadorDaPartida: ${solicitanteEhJogadorDaPartida}`);
        if (solicitanteEhJogadorDaPartida.length == 0) {
            throw new common_1.BadRequestException(`O solicitante deve ser um jogador da partida!`);
        }
        const categoriaDoJogador = await this.categoriasService.consultarCategoriaDoJogador(criarDesafioDto.solicitante);
        if (!categoriaDoJogador) {
            throw new common_1.BadRequestException(`O solicitante precisa estar registrado em uma categoria!`);
        }
        const desafioCriado = new this.desafioModel(criarDesafioDto);
        desafioCriado.categoria = categoriaDoJogador.categoria;
        desafioCriado.dataHoraSolicitacao = new Date();
        desafioCriado.status = desafio_status_enum_1.DesafioStatus.PENDENTE;
        this.logger.log(`desafioCriado: ${JSON.stringify(desafioCriado)}`);
        return await desafioCriado.save();
    }
    async consultarTodosDesafios() {
        return await this.desafioModel.find()
            .populate("solicitante")
            .populate("jogadores")
            .populate("partida")
            .exec();
    }
    async consultarDesafiosDeUmJogador(_id) {
        const jogadores = await this.jogadoresService.consultarTodosJogadores();
        const jogadorFilter = jogadores.filter(jogador => jogador._id == _id);
        if (jogadorFilter.length == 0) {
            throw new common_1.BadRequestException(`O id ${_id} não é um jogador!`);
        }
        return await this.desafioModel.find()
            .where('jogadores')
            .in(_id)
            .populate("solicitante")
            .populate("jogadores")
            .populate("partida")
            .exec();
    }
    async atualizarDesafio(_id, atualizarDesafioDto) {
        const desafioEncontrado = await this.desafioModel.findById(_id).exec();
        if (!desafioEncontrado) {
            throw new common_1.NotFoundException(`Desafio ${_id} não cadastrado!`);
        }
        if (atualizarDesafioDto.status) {
            desafioEncontrado.dataHoraResposta = new Date();
        }
        desafioEncontrado.status = atualizarDesafioDto.status;
        desafioEncontrado.dataHoraDesafio = atualizarDesafioDto.dataHoraDesafio;
        await this.desafioModel.findOneAndUpdate({ _id }, { $set: desafioEncontrado }).exec();
    }
    async atribuirDesafioPartida(_id, atribuirDesafioPartidaDto) {
        const desafioEncontrado = await this.desafioModel.findById(_id).exec();
        if (!desafioEncontrado) {
            throw new common_1.BadRequestException(`Desafio ${_id} não cadastrado!`);
        }
        const jogadorFilter = desafioEncontrado.jogadores.filter(jogador => String(jogador._id) == String(atribuirDesafioPartidaDto.def));
        this.logger.log(`desafioEncontrado: ${desafioEncontrado}`);
        this.logger.log(`jogadorFilter: ${jogadorFilter}`);
        if (jogadorFilter.length == 0) {
            throw new common_1.BadRequestException(`O jogador vencedor não faz parte do desafio!`);
        }
        const partidaCriada = new this.partidaModel(atribuirDesafioPartidaDto);
        partidaCriada.categoria = desafioEncontrado.categoria;
        partidaCriada.jogadores = desafioEncontrado.jogadores;
        const resultado = await partidaCriada.save();
        desafioEncontrado.status = desafio_status_enum_1.DesafioStatus.REALIZADO;
        desafioEncontrado.partida = resultado;
        try {
            await this.desafioModel.findOneAndUpdate({ _id }, { $set: desafioEncontrado }).exec();
        }
        catch (error) {
            await this.partidaModel.deleteOne({ _id: resultado._id }).exec();
            throw new common_1.InternalServerErrorException();
        }
    }
    async deletarDesafio(_id) {
        const desafioEncontrado = await this.desafioModel.findById(_id).exec();
        if (!desafioEncontrado) {
            throw new common_1.BadRequestException(`Desafio ${_id} não cadastrado!`);
        }
        desafioEncontrado.status = desafio_status_enum_1.DesafioStatus.CANCELADO;
        await this.desafioModel.findOneAndUpdate({ _id }, { $set: desafioEncontrado }).exec();
    }
};
exports.DesafiosService = DesafiosService;
exports.DesafiosService = DesafiosService = DesafiosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Desafio')),
    __param(1, (0, mongoose_1.InjectModel)('Partida')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        jogadores_service_1.JogadoresService,
        categorias_service_1.CategoriasService])
], DesafiosService);
//# sourceMappingURL=desafios.service.js.map