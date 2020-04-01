import { CustomScalar } from '@nestjs/graphql';
export declare class DateTimeScalar implements CustomScalar<string, string> {
    description: string;
    parseValue(value: string): string;
    serialize(value: string): string;
    parseLiteral(ast: any): string;
}
