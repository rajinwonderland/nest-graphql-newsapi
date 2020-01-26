// @reason Added ConfigService as per @nartc's suggestion. Reference to his gist here: https://gist.github.com/nartc/f8f5746e2e00b5a731a338ba76b5c2bb

import { Injectable } from '@nestjs/common';
import { number, object, ObjectSchema, string, validate } from 'joi';
import { Config } from './config.enum';
import { CustomLogger } from '../logger/logger.service';

interface EnvConfig {
	[key: string]: string;
}

@Injectable()
export class ConfigService {
	private readonly envConfig: EnvConfig;

	constructor() {
		const rawConfig =
			process.env.GRAPHQL_ENV === 'development'
				? require('dotenv').config({ path: '.env' }).parsed
				: {
						GRAPHQL_ENV: process.env.GRAPHQL_ENV,
						NEWS_API_KEY: process.env.NEWS_API_KEY,
						PORT: process.env.POR
				  };
		this.envConfig = this.validateConfiguration(rawConfig);
	}

	private validateConfiguration(raw: EnvConfig): EnvConfig {
		const variableSchema: ObjectSchema = object({
			GRAPHQL_ENV: string()
				.valid(['development', 'production'])
				.default('development'),
			NEWS_API_KEY: string().required(),
			PORT: number().default(3000)
		});

		const { error, value: validatedConfig } = validate(raw, variableSchema);

		if (error) {
			CustomLogger.error(
				`Config validation error: ${error.message}`,
				error.stack,
				JSON.stringify(error.details)
			);
			throw new Error(`Config validation error: ${error.message}`);
		}

		return validatedConfig;
	}

	get isDevelopment(): boolean {
		return Boolean(this.get(Config.GRAPHQL_ENV));
	}

	get port(): number {
		return Number(this.get(Config.PORT));
	}

	get newsApiKey(): string {
		return this.get(Config.NEWS_API_KEY);
	}

	get(key: Config): string {
		return this.envConfig[key];
	}
}
