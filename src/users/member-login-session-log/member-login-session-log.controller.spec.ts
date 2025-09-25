import { Test, TestingModule } from '@nestjs/testing';
import { MemberLoginSessionLogController } from './member-login-session-log.controller';
import { MemberLoginSessionLogService } from './member-login-session-log.service';

describe('MemberLoginSessionLogController', () => {
  let controller: MemberLoginSessionLogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberLoginSessionLogController],
      providers: [MemberLoginSessionLogService],
    }).compile();

    controller = module.get<MemberLoginSessionLogController>(MemberLoginSessionLogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
