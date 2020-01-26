import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { NewsModule } from './news/news.module';
import { CommonModule } from './common/common.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { CustomLogger } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
	imports: [
		NewsModule,
		CommonModule,
		LoggerModule,
		ConfigModule,
		GraphQLModule.forRoot({
			typePaths: ['./**/*.graphql'],
			installSubscriptionHandlers: false,
			debug: true,
			playground: true
		})
	]
})
export class ApplicationModule implements OnApplicationBootstrap {
	private readonly config;
	private isDevelopment;
	private logger;
	constructor(config: ConfigService, logger: CustomLogger) {
		this.config = config;
		this.isDevelopment = this.config.isDevelopment;
		this.logger = logger;
	}
	onApplicationBootstrap() {
		this.postListen();
	}

	// @deprecated Used to open browser straight to graphql playground prior to nestjs-cli
	// openPlayground() {
	// 	if (!this.isDevelopment) {
	// 		return;
	// 	}

	// 	// ! Used to open browser straight to graphql playground
	// 	// return require('opn')(`http://localhost:${this.config.port}/graphql`);
	// }

	postListen() {
		if (!this.isDevelopment) {
			return;
		}
		this.logger.log(
			`\nStarting the ${this.config.get('GRAPHQL_ENV')} server...\n`
		);
		this.logger.log(
			`Serving on ${`http://localhost:${this.config.port}`}/graphql`
		);
		// this.openPlayground();
	}
}
