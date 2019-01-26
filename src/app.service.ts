import { Injectable } from '@nestjs/common';
import { ConfigService } from './common/conifig/config.service';
import { CustomLogger } from './common/logger/logger.service';

@Injectable()
export class AppService {
	private isDevelopment: boolean;
	private configs;
	constructor(config: ConfigService) {
		// Please take note that this check is case sensitive!
		this.isDevelopment = config.isDevelopment;
		this.configs = config;
	}

	openPlayground() {
		// @def opn instantiation for opening the browser for better dX
		if (!this.isDevelopment) {
			return;
		}
		const opn = require('opn');
		// ! opens the browser straight to playground
		return opn(`http://localhost:${this.configs.port}/graphql`);
	}

	postListen() {
		if (!this.isDevelopment) {
			return;
		}
		CustomLogger.log(
			`\nStarting the ${this.configs.get('NODE_ENV')} server...\n`,
		);
		CustomLogger.log(
			`Serving on ${`http://localhost:${this.configs.port}`}/graphql`,
		);
		this.openPlayground();
	}
}
