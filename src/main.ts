import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(parseInt(process.env.PORT) || 3000);
}

bootstrap();
