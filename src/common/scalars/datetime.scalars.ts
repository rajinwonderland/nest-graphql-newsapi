import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('DateTime')
export class DateTimeScalar implements CustomScalar<string, string> {
	description = 'Date custom scalar type';

	parseValue(value: string): string {
		return new Date(value).toISOString(); // value from the client
	}

	serialize(value: string): string {
		return new Date(value).toISOString(); // value sent to the client
	}

	parseLiteral(ast: any): string {
		if (ast.kind === Kind.INT) {
			return new Date(ast.value).toISOString();
		}
		return null;
	}
}
