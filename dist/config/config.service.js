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
const joi_1 = require("joi");
const config_enum_1 = require("./config.enum");
const logger_service_1 = require("../logger/logger.service");
let ConfigService = class ConfigService {
    constructor() {
        const rawConfig = process.env.GRAPHQL_ENV === 'development'
            ? require('dotenv').config({ path: '.env' }).parsed
            : {
                GRAPHQL_ENV: process.env.GRAPHQL_ENV,
                NEWS_API_KEY: process.env.NEWS_API_KEY,
                PORT: process.env.POR
            };
        this.envConfig = this.validateConfiguration(rawConfig);
    }
    validateConfiguration(raw) {
        const variableSchema = joi_1.object({
            GRAPHQL_ENV: joi_1.string()
                .valid(['development', 'production'])
                .default('development'),
            NEWS_API_KEY: joi_1.string().required(),
            PORT: joi_1.number().default(3000)
        });
        const { error, value: validatedConfig } = joi_1.validate(raw, variableSchema);
        if (error) {
            logger_service_1.CustomLogger.error(`Config validation error: ${error.message}`, error.stack, JSON.stringify(error.details));
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedConfig;
    }
    get isDevelopment() {
        return Boolean(this.get(config_enum_1.Config.GRAPHQL_ENV));
    }
    get port() {
        return Number(this.get(config_enum_1.Config.PORT));
    }
    get newsApiKey() {
        return this.get(config_enum_1.Config.NEWS_API_KEY);
    }
    get(key) {
        return this.envConfig[key];
    }
};
ConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
//# sourceMappingURL=config.service.js.map