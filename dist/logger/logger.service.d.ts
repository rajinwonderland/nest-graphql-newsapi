import { Logger } from '@nestjs/common';
export declare class CustomLogger extends Logger {
    c: any;
    constructor();
    error(message: string, trace?: string, ctx?: any): void;
    info(message: string, ctx: any): void;
    log(message: string, ctx?: any): void;
    warn(message: string, ctx?: any): void;
    success(message: string, ctx?: any): void;
    custom(key: string, message: string, ctx: any): void;
}
