import { Test, TestingModule } from '@nestjs/testing';
import { LanguagePageDetailsService } from './language-page-details.service';

describe('LanguagePageDetailsService', () => {
  let service: LanguagePageDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguagePageDetailsService],
    }).compile();

    service = module.get<LanguagePageDetailsService>(LanguagePageDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
