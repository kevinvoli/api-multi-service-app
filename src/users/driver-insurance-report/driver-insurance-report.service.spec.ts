import { Test, TestingModule } from '@nestjs/testing';
import { DriverInsuranceReportService } from './driver-insurance-report.service';

describe('DriverInsuranceReportService', () => {
  let service: DriverInsuranceReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverInsuranceReportService],
    }).compile();

    service = module.get<DriverInsuranceReportService>(DriverInsuranceReportService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
