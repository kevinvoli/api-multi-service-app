import { Test, TestingModule } from '@nestjs/testing';
import { RelatedCommunesService } from './related-communes.service';

describe('RelatedCommunesService', () => {
  let service: RelatedCommunesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelatedCommunesService],
    }).compile();

    service = module.get<RelatedCommunesService>(RelatedCommunesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
