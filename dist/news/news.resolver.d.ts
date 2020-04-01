import { ArticleResponse, SourceResponse, SourceInput, HeadlineInput, EverythingInput } from '../graphql.schema';
import { NewsApiService } from './news.service';
export declare class NewsApiResolvers {
    private readonly newService;
    constructor(newService: NewsApiService);
    everything(q: string, options: EverythingInput): Promise<ArticleResponse>;
    topHeadlines(q: string, options: HeadlineInput): Promise<ArticleResponse>;
    sources(parent: any, options: SourceInput): Promise<SourceResponse>;
}
