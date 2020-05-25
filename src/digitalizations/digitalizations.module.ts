import { Module } from '@nestjs/common';
import { DigitalizationsService } from './digitalizations.service';
import { DigitalizationsController } from './digitalizations.controller';

@Module({
  providers: [DigitalizationsService],
  controllers: [DigitalizationsController]
})
export class DigitalizationsModule {}
