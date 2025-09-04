import { Test, TestingModule } from '@nestjs/testing';
import { MemberLogsService } from './member-logs.service';

describe('MemberLogsService', () => {
  let service: MemberLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberLogsService],
    }).compile();

    service = module.get<MemberLogsService>(MemberLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
