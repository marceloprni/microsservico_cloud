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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const jogadores_service_1 = require("../jogadores/jogadores.service");
let CategoriasService = class CategoriasService {
    categoriaModel;
    jogadoresService;
    constructor(categoriaModel, jogadoresService) {
        this.categoriaModel = categoriaModel;
        this.jogadoresService = jogadoresService;
    }
    async criarCategoria(criarCategoriaDto) {
        const { categoria } = criarCategoriaDto;
        console.log(categoria);
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        console.log(categoriaEncontrada);
        if (categoriaEncontrada) {
            throw new common_1.BadRequestException(`Categoria ${categoria} já cadastrada`);
        }
        const categoria1 = new this.categoriaModel(criarCategoriaDto);
        return await categoria1.save();
    }
    async consultarCategorias() {
        return await this.categoriaModel.find().populate("jogadores").exec();
    }
    async consultarCategoriaPeloId(categoria) {
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        if (!categoriaEncontrada) {
            throw new common_1.BadRequestException(`Categoria ${categoria} não encontrada`);
        }
        return categoriaEncontrada;
    }
    async atualizarCategoria(categoria, atualizarCategoriaDto) {
        console.log(categoria);
        console.log(atualizarCategoriaDto);
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        if (!categoriaEncontrada) {
            throw new common_1.BadRequestException(`Categoria ${categoria} não encontrada!`);
        }
        await this.categoriaModel.findOneAndUpdate({ categoria: categoria }, { $set: atualizarCategoriaDto }).exec();
    }
    async consultarCategoriaDoJogador(idJogador) {
        const jogadores = await this.jogadoresService.consultarTodosJogadores();
        const jogadorFilter = jogadores.filter(jogador => jogador._id == idJogador);
        if (jogadorFilter.length == 0) {
            throw new common_1.BadRequestException(`O id ${idJogador} não é um jogador!`);
        }
        const categoriaEncontrada = await this.categoriaModel.findOne().where('jogadores').in(idJogador).exec();
        if (!categoriaEncontrada) {
            throw new common_1.BadRequestException(`Categoria não encontrada para o jogador ${idJogador}`);
        }
        return categoriaEncontrada;
    }
    async atribuirCategoriaJogador(params) {
        const categoria = params['categoria'];
        const idJogador = params['idJogador'];
        await this.jogadoresService.consultarJogadorPeloId(idJogador);
        const categoriaEncontrada = await this.categoriaModel.findOne({ categoria }).exec();
        const jogadorJaCadastradoNaCategoria = await this.categoriaModel.find({ categoria: categoria }).where('jogadores').in(idJogador).exec();
        if (!categoriaEncontrada) {
            throw new common_1.BadRequestException(`Categoria ${categoria} não encontrada!`);
        }
        if (jogadorJaCadastradoNaCategoria.length > 0) {
            throw new common_1.BadRequestException(`Jogador ${idJogador} já cadastrado na categoria ${categoria}`);
        }
        categoriaEncontrada.jogadores.push(idJogador);
        await this.categoriaModel.findOneAndUpdate({ categoria: categoria }, { $set: categoriaEncontrada }).exec();
    }
};
exports.CategoriasService = CategoriasService;
exports.CategoriasService = CategoriasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Categoria')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jogadores_service_1.JogadoresService])
], CategoriasService);
//# sourceMappingURL=categorias.service.js.map