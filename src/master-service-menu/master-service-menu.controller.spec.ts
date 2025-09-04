import { Test, TestingModule } from '@nestjs/testing';
import { MasterServiceMenuController } from './master-service-menu.controller';
import { MasterServiceMenuService } from './master-service-menu.service';

describe('MasterServiceMenuController', () => {
  let controller: MasterServiceMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterServiceMenuController],
      providers: [MasterServiceMenuService],
    }).compile();

    controller = module.get<MasterServiceMenuController>(MasterServiceMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
