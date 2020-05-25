import { Module } from '@nestjs/common';
import { DigitalizationsService } from './digitalizations.service';

@Module({
  providers: [DigitalizationsService]
})
export class DigitalizationsModule {}
