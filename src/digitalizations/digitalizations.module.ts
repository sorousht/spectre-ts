import { Module } from '@nestjs/common';
import { DigitalizationsService } from './digitalizations.service';
import { DigitalizationsController } from './digitalizations.controller';
import { DigitalizationsResolver } from './digitalizations.resolver';

@Module({
  providers: [DigitalizationsService, DigitalizationsResolver],
  controllers: [DigitalizationsController]
})
export class DigitalizationsModule {}
