import { Module, OnModuleInit } from '@nestjs/common';
import { ConfigService } from './config.service';
import { CustomLogger } from '../logger/logger.service';
import { LoggerModule } from '../logger/logger.module';

@Module({
	imports: [LoggerModule],
	providers: [ConfigService],
	exports: [ConfigService]
})
export class ConfigModule implements OnModuleInit {
	logger;
	constructor(logger: CustomLogger) {
		this.logger = logger;
	}
	onModuleInit() {
		this.logger.log('Configs Initiated');
	}
}
