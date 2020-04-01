import { Config } from './config.enum';
export declare class ConfigService {
    private readonly envConfig;
    constructor();
    private validateConfiguration;
    get isDevelopment(): boolean;
    get port(): number;
    get newsApiKey(): string;
    get(key: Config): string;
}
