import { ArticleResponse, HeadlineInput, EverythingInput, SourceResponse, SourceInput } from '../graphql.schema';
export declare class NewsApiService {
    everything(q: string, options: EverythingInput): Promise<ArticleResponse>;
    topHeadlines(q: string, options: HeadlineInput): Promise<ArticleResponse>;
    sources(options: SourceInput): Promise<SourceResponse>;
}
