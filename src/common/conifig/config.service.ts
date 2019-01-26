import { Injectable } from '@nestjs/common';
import { parse } from 'dotenv';
import { readFileSync } from 'fs';
import { number, object, ObjectSchema, string, validate } from 'joi';
import { Config } from './config.enum';
import { MyLogger } from '../logger/logger.service';
// @reason Added ConfigService as per @nartc's suggestion. Reference to his gist here: https://gist.github.com/nartc/f8f5746e2e00b5a731a338ba76b5c2bb

interface EnvConfig {
	[key: string]: string;
}

@Injectable()
export class ConfigService {
	private readonly envConfig: EnvConfig;

	constructor(filePath: string) {
		const rawConfig = parse(readFileSync(filePath));
		this.envConfig = this.validateConfiguration(rawConfig);
	}

	private validateConfiguration(raw: EnvConfig): EnvConfig {
		const variableSchema: ObjectSchema = object({
			NODE_ENV: string()
				.valid(['development', 'production'])
				.default('development'),
			NEWS_API_KEY: string().required(),
			PORT: number().default(3000),
		});

		const { error, value: validatedConfig } = validate(raw, variableSchema);

		if (error) {
			MyLogger.error(
				`Config validation error: ${error.message}`,
				error.stack,
				error.details.toString(),
			);
			throw new Error(`Config validation error: ${error.message}`);
		}

		return validatedConfig;
	}

	get isDevelopment(): boolean {
		return Boolean(this.get(Config.NODE_ENV));
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
