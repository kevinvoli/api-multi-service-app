import { Test, TestingModule } from '@nestjs/testing';
import { GopayOtpLogsService } from './gopay-otp-logs.service';

describe('GopayOtpLogsService', () => {
  let service: GopayOtpLogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GopayOtpLogsService],
    }).compile();

    service = module.get<GopayOtpLogsService>(GopayOtpLogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
