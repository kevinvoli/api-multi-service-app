import { Test, TestingModule } from '@nestjs/testing';
import { UserStatusLogsService } from './user-status-logs.service';

describe('UserStatusLogsService', () => {
  let service: UserStatusLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStatusLogsService],
    }).compile();

    service = module.get<UserStatusLogsService>(UserStatusLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
