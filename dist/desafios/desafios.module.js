"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesafiosModule = void 0;
const common_1 = require("@nestjs/common");
const desafios_service_1 = require("./desafios.service");
const desafios_controller_1 = require("./desafios.controller");
const mongoose_1 = require("@nestjs/mongoose");
const desafio_schema_1 = require("./interfaces/desafio.schema");
const jogadores_module_1 = require("../jogadores/jogadores.module");
const categorias_module_1 = require("../categorias/categorias.module");
const partida_schema_1 = require("./interfaces/partida.schema");
let DesafiosModule = class DesafiosModule {
};
exports.DesafiosModule = DesafiosModule;
exports.DesafiosModule = DesafiosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Desafio', schema: desafio_schema_1.DesafioSchema },
                { name: 'Partida', schema: partida_schema_1.PartidaSchema }
            ]),
            jogadores_module_1.JogadoresModule,
            categorias_module_1.CategoriasModule
        ],
        controllers: [desafios_controller_1.DesafiosController],
        providers: [desafios_service_1.DesafiosService]
    })
], DesafiosModule);
//# sourceMappingURL=desafios.module.js.map