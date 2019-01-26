import { Module, Logger } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { NewsModule } from './news/news.module';
import { CommonModule } from './common/common.modules';
import { AppService } from './app.service';

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
				path: join(
					process.cwd(),
					process.env.NODE_ENV === 'development'
						? 'src/graphql.schema.ts'
						: '/graphql.schema.ts',
				),
				outputAs: 'class',
			},
		}),
	],
	providers: [AppService],
})
export class ApplicationModule {}
