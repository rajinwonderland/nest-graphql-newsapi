import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { NewsModule } from './news/news.module';
import { CommonModule } from './common/common.modules';

@Module({
	imports: [
		NewsModule,
		CommonModule,
		GraphQLModule.forRoot({
			typePaths: ['./**/*.graphql'],
			installSubscriptionHandlers: false,
			debug: true,
			playground: true,
			definitions: {
				path: join(process.cwd(), '/graphql.schema.ts'),
				outputAs: 'class',
			},
		}),
	],
})
export class ApplicationModule {}
