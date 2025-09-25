import { Test, TestingModule } from '@nestjs/testing';
import { ContentCubexDetailsService } from './content-cubex-details.service';

describe('ContentCubexDetailsService', () => {
  let service: ContentCubexDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContentCubexDetailsService],
    }).compile();

    service = module.get<ContentCubexDetailsService>(ContentCubexDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
