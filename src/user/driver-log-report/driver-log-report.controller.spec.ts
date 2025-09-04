import { Test, TestingModule } from '@nestjs/testing';
import { DriverLogReportController } from './driver-log-report.controller';
import { DriverLogReportService } from './driver-log-report.service';

describe('DriverLogReportController', () => {
  let controller: DriverLogReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverLogReportController],
      providers: [DriverLogReportService],
    }).compile();

    controller = module.get<DriverLogReportController>(DriverLogReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
