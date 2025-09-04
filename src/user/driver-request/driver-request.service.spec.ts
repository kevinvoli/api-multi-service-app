import { Test, TestingModule } from '@nestjs/testing';
import { DriverRequestService } from './driver-request.service';

describe('DriverRequestService', () => {
  let service: DriverRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverRequestService],
    }).compile();

    service = module.get<DriverRequestService>(DriverRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
