import { Test, TestingModule } from '@nestjs/testing';
import { DriverDocService } from './driver-doc.service';

describe('DriverDocService', () => {
  let service: DriverDocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DriverDocService],
    }).compile();

    service = module.get<DriverDocService>(DriverDocService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
