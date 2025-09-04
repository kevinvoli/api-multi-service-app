import { Test, TestingModule } from '@nestjs/testing';
import { SeoSectionService } from './seo-section.service';

describe('SeoSectionService', () => {
  let service: SeoSectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeoSectionService],
    }).compile();

    service = module.get<SeoSectionService>(SeoSectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
