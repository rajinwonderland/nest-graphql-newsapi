import { Injectable } from '@nestjs/common';
import {
	ArticleResponse,
	HeadlineInput,
	EverythingInput,
	SourceResponse,
	SourceInput,
} from '../graphql.schema';
import { ConfigService } from '../config/config.service';

@Injectable()
/**
 * Service for communicating with the News Api
 * @preferred
 */
export class NewsApiService {
	private readonly newsapi: any;
	private readonly config: ConfigService;
	constructor(config: ConfigService) {
		const NewsAPI = require('newsapi');
		this.config = config;
		this.newsapi = new NewsAPI(this.config.newsApiKey);
	}
	/**
	 * @param q  Keywords or phrases to search for `q: string`.
	 * @param options EverythingInput Class: see `src/graphql.schema.types` for type documentation
	 * @returns `response: Promise<ArticleResponse>`
	 */
	async everything(
		q: string,
		options: EverythingInput,
	): Promise<ArticleResponse> {
		const response = await this.newsapi.v2
			.everything({
				q,
				...options,
			})
			.then(res => res);
		return response;
	}
	/**
	 * @param q  Keywords or phrases to search for `q: string`.
	 * @param options HeadlineInput Class: see `src/graphql.schema.types` for type documentation
	 * @returns `response: Promise<ArticleResponse>`
	 */
	async topHeadlines(
		q: string,
		options: HeadlineInput,
	): Promise<ArticleResponse> {
		const response = await this.newsapi.v2
			.topHeadlines({
				q,
				...options,
			})
			.then(res => res);

		return response;
	}
	/**
	 * @param options SourceInput Class: see `src/graphql.schema.types` for type documentation
	 * @returns `response: Promise<SourceResponse>`
	 */
	async sources(options: SourceInput): Promise<SourceResponse> {
		const response = await this.newsapi.v2
			.sources({
				...options,
			})
			.then(res => res);

		return response;
	}
}
