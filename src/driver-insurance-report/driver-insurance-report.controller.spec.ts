import { Test, TestingModule } from '@nestjs/testing';
import { DriverInsuranceReportController } from './driver-insurance-report.controller';
import { DriverInsuranceReportService } from './driver-insurance-report.service';

describe('DriverInsuranceReportController', () => {
  let controller: DriverInsuranceReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverInsuranceReportController],
      providers: [DriverInsuranceReportService],
    }).compile();

    controller = module.get<DriverInsuranceReportController>(DriverInsuranceReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
