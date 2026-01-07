"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidaParametrosPipe = void 0;
const common_1 = require("@nestjs/common");
class ValidaParametrosPipe {
    transform(value, metadata) {
        if (!value) {
            throw new common_1.BadRequestException(`O parâmetro ${metadata.data} é obrigatório`);
        }
        return value;
    }
}
exports.ValidaParametrosPipe = ValidaParametrosPipe;
//# sourceMappingURL=validacao-parametros.pipe.js.map