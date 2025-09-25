import { Test, TestingModule } from '@nestjs/testing';
import { MemberLoginSessionLogService } from './member-login-session-log.service';

describe('MemberLoginSessionLogService', () => {
  let service: MemberLoginSessionLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemberLoginSessionLogService],
    }).compile();

    service = module.get<MemberLoginSessionLogService>(MemberLoginSessionLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
