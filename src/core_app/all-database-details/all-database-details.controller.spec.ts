import { Test, TestingModule } from '@nestjs/testing';
import { AllDatabaseDetailsController } from './all-database-details.controller';
import { AllDatabaseDetailsService } from './all-database-details.service';

describe('AllDatabaseDetailsController', () => {
  let controller: AllDatabaseDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AllDatabaseDetailsController],
      providers: [AllDatabaseDetailsService],
    }).compile();

    controller = module.get<AllDatabaseDetailsController>(AllDatabaseDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
