import { Test, TestingModule } from '@nestjs/testing';
import { RequestPostDataService } from './request-post-data.service';

describe('RequestPostDataService', () => {
  let service: RequestPostDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestPostDataService],
    }).compile();

    service = module.get<RequestPostDataService>(RequestPostDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
