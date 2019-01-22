import { Module } from '@nestjs/common';
import { NewsApiResolvers } from './news.resolvers';
import { NewsApiService } from './news.service';

@Module({
	providers: [NewsApiService, NewsApiResolvers],
})
export class NewsModule {}
