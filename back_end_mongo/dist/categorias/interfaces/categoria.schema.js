"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CategoriaSchema = new mongoose_1.default.Schema({
    categoria: { type: String, unique: true },
    descricao: { type: String },
    eventos: [
        {
            nome: { type: String },
            operacao: { type: String },
            valor: { type: Number }
        }
    ],
    jogadores: [
        { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Jogador' }
    ]
}, { timestamps: true, collection: 'categorias' });
//# sourceMappingURL=categoria.schema.js.map