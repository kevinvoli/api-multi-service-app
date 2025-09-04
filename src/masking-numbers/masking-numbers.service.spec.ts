import { Test, TestingModule } from '@nestjs/testing';
import { MaskingNumbersService } from './masking-numbers.service';

describe('MaskingNumbersService', () => {
  let service: MaskingNumbersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaskingNumbersService],
    }).compile();

    service = module.get<MaskingNumbersService>(MaskingNumbersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
