import { Test, TestingModule } from '@nestjs/testing';
import { MemberLogsController } from './member-logs.controller';
import { MemberLogsService } from './member-logs.service';

describe('MemberLogsController', () => {
  let controller: MemberLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemberLogsController],
      providers: [MemberLogsService],
    }).compile();

    controller = module.get<MemberLogsController>(MemberLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
