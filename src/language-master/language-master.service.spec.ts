import { Test, TestingModule } from '@nestjs/testing';
import { LanguageMasterService } from './language-master.service';

describe('LanguageMasterService', () => {
  let service: LanguageMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageMasterService],
    }).compile();

    service = module.get<LanguageMasterService>(LanguageMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
