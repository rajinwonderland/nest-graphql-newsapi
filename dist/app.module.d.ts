import { OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from './config/config.service';
import { CustomLogger } from './logger/logger.service';
export declare class ApplicationModule implements OnApplicationBootstrap {
    private readonly config;
    private isDevelopment;
    private logger;
    constructor(config: ConfigService, logger: CustomLogger);
    onApplicationBootstrap(): void;
    postListen(): void;
}
