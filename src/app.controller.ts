import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { Digitalization } from './digitalizations/models/digitalization.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: Digitalization, description: 'successfully retrieved some digitalizations'})
  @ApiResponse({ status: 500, description: 'An internal error occured while retrieving some digitalizations' })
  getHello(): string {
    return this.appService.getHello();
  }
}
