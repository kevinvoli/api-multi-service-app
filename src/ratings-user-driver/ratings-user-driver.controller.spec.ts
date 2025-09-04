import { Test, TestingModule } from '@nestjs/testing';
import { RatingsUserDriverController } from './ratings-user-driver.controller';
import { RatingsUserDriverService } from './ratings-user-driver.service';

describe('RatingsUserDriverController', () => {
  let controller: RatingsUserDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RatingsUserDriverController],
      providers: [RatingsUserDriverService],
    }).compile();

    controller = module.get<RatingsUserDriverController>(RatingsUserDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
