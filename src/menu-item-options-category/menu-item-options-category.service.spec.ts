import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemOptionsCategoryService } from './menu-item-options-category.service';

describe('MenuItemOptionsCategoryService', () => {
  let service: MenuItemOptionsCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuItemOptionsCategoryService],
    }).compile();

    service = module.get<MenuItemOptionsCategoryService>(MenuItemOptionsCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
