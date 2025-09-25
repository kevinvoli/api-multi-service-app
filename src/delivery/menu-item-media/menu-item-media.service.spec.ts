import { Test, TestingModule } from '@nestjs/testing';
import { MenuItemMediaService } from './menu-item-media.service';

describe('MenuItemMediaService', () => {
  let service: MenuItemMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuItemMediaService],
    }).compile();

    service = module.get<MenuItemMediaService>(MenuItemMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
