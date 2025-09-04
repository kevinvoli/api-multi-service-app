import { Test, TestingModule } from '@nestjs/testing';
import { MasterLngPagesController } from './master-lng-pages.controller';
import { MasterLngPagesService } from './master-lng-pages.service';

describe('MasterLngPagesController', () => {
  let controller: MasterLngPagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MasterLngPagesController],
      providers: [MasterLngPagesService],
    }).compile();

    controller = module.get<MasterLngPagesController>(MasterLngPagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
