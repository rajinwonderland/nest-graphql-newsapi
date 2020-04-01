import { OnModuleInit } from '@nestjs/common';
import { CustomLogger } from '../logger/logger.service';
export declare class ConfigModule implements OnModuleInit {
    logger: any;
    constructor(logger: CustomLogger);
    onModuleInit(): void;
}
