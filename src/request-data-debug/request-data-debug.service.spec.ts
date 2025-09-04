import { Test, TestingModule } from '@nestjs/testing';
import { RequestDataDebugService } from './request-data-debug.service';

describe('RequestDataDebugService', () => {
  let service: RequestDataDebugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestDataDebugService],
    }).compile();

    service = module.get<RequestDataDebugService>(RequestDataDebugService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
