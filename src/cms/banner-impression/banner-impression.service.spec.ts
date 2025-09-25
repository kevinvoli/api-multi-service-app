import { Test, TestingModule } from '@nestjs/testing';
import { BannerImpressionService } from './banner-impression.service';

describe('BannerImpressionService', () => {
  let service: BannerImpressionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BannerImpressionService],
    }).compile();

    service = module.get<BannerImpressionService>(BannerImpressionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
