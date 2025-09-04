import { Test, TestingModule } from '@nestjs/testing';
import { SetupInfoService } from './setup-info.service';

describe('SetupInfoService', () => {
  let service: SetupInfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SetupInfoService],
    }).compile();

    service = module.get<SetupInfoService>(SetupInfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
