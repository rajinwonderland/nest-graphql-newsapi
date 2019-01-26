import { Module } from '@nestjs/common';
import { DateScalar } from './scalars/date.scalars';
import { ConfigModule } from './conifig/config.module';
import { LoggerModule } from './logger/logger.module';

@Module({
	providers: [DateScalar, ConfigModule, LoggerModule],
	exports: [DateScalar, ConfigModule, LoggerModule],
})
export class CommonModule {}
