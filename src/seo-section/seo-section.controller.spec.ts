import { Test, TestingModule } from '@nestjs/testing';
import { SeoSectionController } from './seo-section.controller';
import { SeoSectionService } from './seo-section.service';

describe('SeoSectionController', () => {
  let controller: SeoSectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeoSectionController],
      providers: [SeoSectionService],
    }).compile();

    controller = module.get<SeoSectionController>(SeoSectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
