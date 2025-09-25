import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemOptionsCategoryController } from './menu-item-options-category.controller';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';

describe('MenuItemOptionsCategoryController', () => {
  let controller: MenuItemOptionsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuItemOptionsCategoryController],
      providers: [MenuItemOptionsCategoryService],
    }).compile();

    controller = module.get<MenuItemOptionsCategoryController>(MenuItemOptionsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
