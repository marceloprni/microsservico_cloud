"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JogadorSchema = void 0;
const mongoose_1 = require("mongoose");
exports.JogadorSchema = new mongoose_1.default.Schema({
    telefoneCelular: { type: String, unique: true },
    email: { type: String, unique: true },
    nome: { type: String },
    ranking: { type: String },
    posicaoRanking: { type: Number },
    urlFotoJogador: { type: String }
}, { timestamps: true, collection: 'jogadores' });
//# sourceMappingURL=jogador.schema.js.map