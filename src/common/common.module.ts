import { Module } from '@nestjs/common';
import { DateTimeScalar } from './scalars/datetime.scalars';

@Module({
	providers: [DateTimeScalar],
	exports: [DateTimeScalar]
})
export class CommonModule {}
