import { Module } from '@nestjs/common';
import { NewsApiResolvers } from './news.resolvers';
import { NewsApiService } from './news.service';
import { ConfigModule } from '../config/config.module';

@Module({
	imports: [ConfigModule],
	providers: [NewsApiService, NewsApiResolvers],
})
export class NewsModule {}
