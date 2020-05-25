import { Test, TestingModule } from '@nestjs/testing';
import { DigitalizationsController } from './digitalizations.controller';

describe('Digitalizations Controller', () => {
  let controller: DigitalizationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DigitalizationsController],
    }).compile();

    controller = module.get<DigitalizationsController>(
      DigitalizationsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
