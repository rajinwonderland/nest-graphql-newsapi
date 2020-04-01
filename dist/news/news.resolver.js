"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const graphql_schema_1 = require("../graphql.schema");
const news_service_1 = require("./news.service");
let NewsApiResolvers = class NewsApiResolvers {
    constructor(newService) {
        this.newService = newService;
    }
    async everything(q, options) {
        return await this.newService.everything(q, options);
    }
    async topHeadlines(q, options) {
        return await this.newService.topHeadlines(q, options);
    }
    async sources(parent, options) {
        return await this.newService.sources(options);
    }
};
__decorate([
    graphql_1.Query('everything'),
    __param(0, graphql_1.Args('q')),
    __param(1, graphql_1.Args('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.EverythingInput]),
    __metadata("design:returntype", Promise)
], NewsApiResolvers.prototype, "everything", null);
__decorate([
    graphql_1.Query('topHeadlines'),
    __param(0, graphql_1.Args('q')),
    __param(1, graphql_1.Args('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, graphql_schema_1.HeadlineInput]),
    __metadata("design:returntype", Promise)
], NewsApiResolvers.prototype, "topHeadlines", null);
__decorate([
    graphql_1.Query('sources'),
    __param(0, graphql_1.Parent()),
    __param(1, graphql_1.Args('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, graphql_schema_1.SourceInput]),
    __metadata("design:returntype", Promise)
], NewsApiResolvers.prototype, "sources", null);
NewsApiResolvers = __decorate([
    graphql_1.Resolver('NewsApi'),
    __metadata("design:paramtypes", [news_service_1.NewsApiService])
], NewsApiResolvers);
exports.NewsApiResolvers = NewsApiResolvers;
//# sourceMappingURL=news.resolver.js.map