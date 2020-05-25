import { Controller, Get } from '@nestjs/common';
import { Digitalization } from './models/digitalization.model';
import { DigitalizationsService } from './digitalizations.service';

@Controller('digitalizations')
export class DigitalizationsController {
  constructor(private readonly service: DigitalizationsService) {}

  @Get()
  getAll(): Promise<Digitalization[]> {
    return this.service.getAll();
  }
}
