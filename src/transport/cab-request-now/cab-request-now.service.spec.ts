import { Test, TestingModule } from '@nestjs/testing';
import { CabRequestNowService } from './cab-request-now.service';

describe('CabRequestNowService', () => {
  let service: CabRequestNowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CabRequestNowService],
    }).compile();

    service = module.get<CabRequestNowService>(CabRequestNowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
