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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const news_module_1 = require("./news/news.module");
const common_module_1 = require("./common/common.module");
const config_module_1 = require("./config/config.module");
const config_service_1 = require("./config/config.service");
const logger_service_1 = require("./logger/logger.service");
const logger_module_1 = require("./logger/logger.module");
let ApplicationModule = class ApplicationModule {
    constructor(config, logger) {
        this.config = config;
        this.isDevelopment = this.config.isDevelopment;
        this.logger = logger;
    }
    onApplicationBootstrap() {
        this.postListen();
    }
    postListen() {
        if (!this.isDevelopment) {
            return;
        }
        else {
            this.logger.log(`\nStarting the ${this.config.get('GRAPHQL_ENV')} server...\n`);
            this.logger.log(`Serving on ${`http://localhost:${this.config.port}`}/graphql`);
        }
    }
};
ApplicationModule = __decorate([
    common_1.Module({
        imports: [
            news_module_1.NewsModule,
            common_module_1.CommonModule,
            logger_module_1.LoggerModule,
            config_module_1.ConfigModule,
            graphql_1.GraphQLModule.forRoot({
                typePaths: ['./**/*.graphql'],
                installSubscriptionHandlers: false,
                debug: true,
                playground: true
            })
        ]
    }),
    __metadata("design:paramtypes", [config_service_1.ConfigService, logger_service_1.CustomLogger])
], ApplicationModule);
exports.ApplicationModule = ApplicationModule;
//# sourceMappingURL=app.module.js.map