import { Test, TestingModule } from '@nestjs/testing';
import { CompanyCuisineController } from './company-cuisine.controller';
import { CompanyCuisineService } from './company-cuisine.service';

describe('CompanyCuisineController', () => {
  let controller: CompanyCuisineController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyCuisineController],
      providers: [CompanyCuisineService],
    }).compile();

    controller = module.get<CompanyCuisineController>(CompanyCuisineController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
