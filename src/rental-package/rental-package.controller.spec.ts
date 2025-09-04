import { Test, TestingModule } from '@nestjs/testing';
import { RentalPackageController } from './rental-package.controller';
import { RentalPackageService } from './rental-package.service';

describe('RentalPackageController', () => {
  let controller: RentalPackageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RentalPackageController],
      providers: [RentalPackageService],
    }).compile();

    controller = module.get<RentalPackageController>(RentalPackageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
