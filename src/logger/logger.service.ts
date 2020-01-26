import { Logger } from '@nestjs/common';
// @reason Added LoggerService as per @nartc's suggestion. Reference to the nestjs Logger module here: https://docs.nestjs.com/techniques/logger
export class CustomLogger extends Logger {
	c: any;
	constructor() {
		super();
		this.c = require('ansi-colors');
	}

	error(message: string, trace?: string, ctx?: any) {
		return super.error(
			this.c.bold(message),
			this.c.red(trace),
			this.c.bgRed(ctx)
		);
	}

	info(message: string, ctx: any) {
		console.info(this.c.italic(message), this.c.white(ctx));
	}
	log(message: string, ctx?: any) {
		return super.log(this.c.bold(message), this.c.white(ctx));
	}
	warn(message: string, ctx?: any) {
		return super.warn(this.c.bold.bgYellow(message), this.c.yellow(ctx));
	}
	public success(message: string, ctx?: any) {
		const msg = this.c.bold.green(message);
		const context = this.c.green(ctx);
		return console.log(msg, context);
	}
	public custom(key: string, message: string, ctx: any) {
		return console.log(this.c[key](message), ctx);
	}
}
