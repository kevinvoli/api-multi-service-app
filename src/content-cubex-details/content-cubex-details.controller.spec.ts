import { Test, TestingModule } from '@nestjs/testing';
import { ContentCubexDetailsController } from './content-cubex-details.controller';
import { ContentCubexDetailsService } from './content-cubex-details.service';

describe('ContentCubexDetailsController', () => {
  let controller: ContentCubexDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentCubexDetailsController],
      providers: [ContentCubexDetailsService],
    }).compile();

    controller = module.get<ContentCubexDetailsController>(ContentCubexDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
