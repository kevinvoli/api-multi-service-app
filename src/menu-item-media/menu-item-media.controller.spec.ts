import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemMediaController } from './menu-item-media.controller';
import { MenuItemMediaService } from './menu-item-media.service';

describe('MenuItemMediaController', () => {
  let controller: MenuItemMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuItemMediaController],
      providers: [MenuItemMediaService],
    }).compile();

    controller = module.get<MenuItemMediaController>(MenuItemMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
