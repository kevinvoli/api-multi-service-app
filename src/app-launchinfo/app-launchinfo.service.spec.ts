import { Test, TestingModule } from '@nestjs/testing';
import { AppLaunchinfoService } from './app-launchinfo.service';

describe('AppLaunchinfoService', () => {
  let service: AppLaunchinfoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppLaunchinfoService],
    }).compile();

    service = module.get<AppLaunchinfoService>(AppLaunchinfoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
