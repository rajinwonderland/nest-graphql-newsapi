import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication
} from '@nestjs/platform-fastify';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		ApplicationModule,
		new FastifyAdapter()
	);
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(parseInt(process.env.PORT) || 8080);
}

bootstrap();
