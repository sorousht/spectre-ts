import { Test, TestingModule } from '@nestjs/testing';
import { DigitalizationsService } from './digitalizations.service';

describe('DigitalizationsService', () => {
  let service: DigitalizationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalizationsService],
    }).compile();

    service = module.get<DigitalizationsService>(DigitalizationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
