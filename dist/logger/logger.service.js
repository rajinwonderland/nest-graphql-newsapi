"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class CustomLogger extends common_1.Logger {
    constructor() {
        super();
        this.c = require('ansi-colors');
    }
    error(message, trace, ctx) {
        return super.error(this.c.bold(message), this.c.red(trace), this.c.bgRed(ctx));
    }
    info(message, ctx) {
        console.info(this.c.italic(message), this.c.white(ctx));
    }
    log(message, ctx) {
        return super.log(this.c.bold(message), this.c.white(ctx));
    }
    warn(message, ctx) {
        return super.warn(this.c.bold.bgYellow(message), this.c.yellow(ctx));
    }
    success(message, ctx) {
        const msg = this.c.bold.green(message);
        const context = this.c.green(ctx);
        return console.log(msg, context);
    }
    custom(key, message, ctx) {
        return console.log(this.c[key](message), ctx);
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=logger.service.js.map