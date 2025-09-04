import { Test, TestingModule } from '@nestjs/testing';
import { UserStatusLogsController } from './user-status-logs.controller';
import { UserStatusLogsService } from './user-status-logs.service';

describe('UserStatusLogsController', () => {
  let controller: UserStatusLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserStatusLogsController],
      providers: [UserStatusLogsService],
    }).compile();

    controller = module.get<UserStatusLogsController>(UserStatusLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
