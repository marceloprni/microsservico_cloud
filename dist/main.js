"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const http_exception_filter_1 = require("./common/filter/http-exception.filter");
const momentTime = require("moment-timezone");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.AllExceptionsFilter());
    Date.prototype.toJSON = function () {
        return momentTime(this)
            .tz('America/Sao_Paulo')
            .format('YYYY-MM-DD HH:mm:ss');
    };
    await app.listen(process.env.PORT ?? 8085);
}
bootstrap();
//# sourceMappingURL=main.js.map