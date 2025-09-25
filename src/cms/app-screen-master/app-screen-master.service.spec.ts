import { Test, TestingModule } from '@nestjs/testing';
import { AppScreenMasterService } from './app-screen-master.service';

describe('AppScreenMasterService', () => {
  let service: AppScreenMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppScreenMasterService],
    }).compile();

    service = module.get<AppScreenMasterService>(AppScreenMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
