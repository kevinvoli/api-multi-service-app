import { Test, TestingModule } from '@nestjs/testing';
import { RegisterDriverService } from './register-driver.service';

describe('RegisterDriverService', () => {
  let service: RegisterDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegisterDriverService],
    }).compile();

    service = module.get<RegisterDriverService>(RegisterDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
