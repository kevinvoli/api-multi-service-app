import { Test, TestingModule } from '@nestjs/testing';
import { RentalPackageService } from './rental-package.service';

describe('RentalPackageService', () => {
  let service: RentalPackageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RentalPackageService],
    }).compile();

    service = module.get<RentalPackageService>(RentalPackageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
