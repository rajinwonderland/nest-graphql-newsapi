import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { CustomLogger } from './common/logger/logger.service';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule, {
		logger: new CustomLogger(),
	});
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(process.env.PORT || 3000);
}

bootstrap();
