import { Test, TestingModule } from '@nestjs/testing';
import { DriverLogReportService } from './driver-log-report.service';

describe('DriverLogReportService', () => {
  let service: DriverLogReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverLogReportService],
    }).compile();

    service = module.get<DriverLogReportService>(DriverLogReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
