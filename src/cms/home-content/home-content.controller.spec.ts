import { Test, TestingModule } from '@nestjs/testing';
import { HomeContentController } from './home-content.controller';
import { HomeContentService } from './home-content.service';

describe('HomeContentController', () => {
  let controller: HomeContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeContentController],
      providers: [HomeContentService],
    }).compile();

    controller = module.get<HomeContentController>(HomeContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
