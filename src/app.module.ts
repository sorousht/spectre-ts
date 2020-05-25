import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DigitalizationsModule } from './digitalizations/digitalizations.module';

@Module({
  imports: [DigitalizationsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
