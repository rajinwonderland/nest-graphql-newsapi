"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_service_1 = require("../config/config.service");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(new config_service_1.ConfigService().newsApiKey);
let NewsApiService = class NewsApiService {
    async everything(q, options) {
        const response = await newsapi.v2
            .everything(Object.assign({ q }, options))
            .then(res => res);
        return response;
    }
    async topHeadlines(q, options) {
        const response = await newsapi.v2
            .topHeadlines(Object.assign({ q }, options))
            .then(res => res);
        return response;
    }
    async sources(options) {
        const response = await newsapi.v2
            .sources(Object.assign({}, options))
            .then(res => res);
        return response;
    }
};
NewsApiService = __decorate([
    common_1.Injectable()
], NewsApiService);
exports.NewsApiService = NewsApiService;
//# sourceMappingURL=news.service.js.map