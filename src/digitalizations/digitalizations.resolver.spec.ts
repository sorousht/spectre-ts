import { Test, TestingModule } from '@nestjs/testing';
import { DigitalizationsResolver } from './digitalizations.resolver';

describe('DigitalizationsResolver', () => {
  let resolver: DigitalizationsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DigitalizationsResolver],
    }).compile();

    resolver = module.get<DigitalizationsResolver>(DigitalizationsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
