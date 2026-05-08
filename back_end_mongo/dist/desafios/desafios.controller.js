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
var DesafiosController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesafiosController = void 0;
const common_1 = require("@nestjs/common");
const desafios_service_1 = require("./desafios.service");
const criar_desafio_dto_1 = require("./dtos/criar-desafio.dto");
const atualizar_desafio_dto_1 = require("./dtos/atualizar-desafio.dto");
const desafio_status_validation_pipe_1 = require("../common/pipes/desafio-status-validation.pipe");
const atribuir_desafio_partida_dto_1 = require("./dtos/atribuir-desafio-partida.dto");
let DesafiosController = DesafiosController_1 = class DesafiosController {
    desafiosService;
    constructor(desafiosService) {
        this.desafiosService = desafiosService;
    }
    logger = new common_1.Logger(DesafiosController_1.name);
    async criarDesafio(criarDesafioDto) {
        this.logger.log(`criarDesafioDto: ${JSON.stringify(criarDesafioDto)}`);
        return await this.desafiosService.criarDesafio(criarDesafioDto);
    }
    async consultarDesafios(_id) {
        return _id ? await this.desafiosService.consultarDesafiosDeUmJogador(_id)
            : await this.desafiosService.consultarTodosDesafios();
    }
    async atualizarDesafio(atualizarDesafioDto, _id) {
        await this.desafiosService.atualizarDesafio(_id, atualizarDesafioDto);
    }
    async atribuirDesafioPartida(atribuirDesafioPartidaDto, _id) {
        return await this.desafiosService.atribuirDesafioPartida(_id, atribuirDesafioPartidaDto);
    }
    async deletarDesafio(_id) {
        this.desafiosService.deletarDesafio(_id);
    }
};
exports.DesafiosController = DesafiosController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criar_desafio_dto_1.CriarDesafioDto]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "criarDesafio", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('idJogador')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "consultarDesafios", null);
__decorate([
    (0, common_1.Put)('/:desafio'),
    __param(0, (0, common_1.Body)(desafio_status_validation_pipe_1.DesafioStatusValidacaoPipe)),
    __param(1, (0, common_1.Param)('desafio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atualizar_desafio_dto_1.AtualizarDesafioDto, String]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "atualizarDesafio", null);
__decorate([
    (0, common_1.Post)('/:desafio/partida/'),
    __param(0, (0, common_1.Body)(common_1.ValidationPipe)),
    __param(1, (0, common_1.Param)('desafio')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [atribuir_desafio_partida_dto_1.AtribuirDesafioPartidaDto, String]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "atribuirDesafioPartida", null);
__decorate([
    (0, common_1.Delete)('/:_id'),
    __param(0, (0, common_1.Param)('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DesafiosController.prototype, "deletarDesafio", null);
exports.DesafiosController = DesafiosController = DesafiosController_1 = __decorate([
    (0, common_1.Controller)('api/v1/desafios'),
    __metadata("design:paramtypes", [desafios_service_1.DesafiosService])
], DesafiosController);
//# sourceMappingURL=desafios.controller.js.map