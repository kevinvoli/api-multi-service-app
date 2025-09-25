import { Test, TestingModule } from '@nestjs/testing';
import { HelpDetailService } from './help-detail.service';

describe('HelpDetailService', () => {
  let service: HelpDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelpDetailService],
    }).compile();

    service = module.get<HelpDetailService>(HelpDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
