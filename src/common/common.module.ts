import { Module } from '@nestjs/common';
import { DateScalar } from './scalars/date.scalars';

@Module({
	providers: [DateScalar],
	exports: [DateScalar],
})
export class CommonModule {}
