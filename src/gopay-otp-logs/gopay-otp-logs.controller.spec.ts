import { Test, TestingModule } from '@nestjs/testing';
import { GopayOtpLogsController } from './gopay-otp-logs.controller';
import { GopayOtpLogsService } from './gopay-otp-logs.service';

describe('GopayOtpLogsController', () => {
  let controller: GopayOtpLogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GopayOtpLogsController],
      providers: [GopayOtpLogsService],
    }).compile();

    controller = module.get<GopayOtpLogsController>(GopayOtpLogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
