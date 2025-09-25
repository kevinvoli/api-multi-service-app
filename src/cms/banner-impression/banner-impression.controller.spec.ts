import { Test, TestingModule } from '@nestjs/testing';
import { BannerImpressionController } from './banner-impression.controller';
import { BannerImpressionService } from './banner-impression.service';

describe('BannerImpressionController', () => {
  let controller: BannerImpressionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BannerImpressionController],
      providers: [BannerImpressionService],
    }).compile();

    controller = module.get<BannerImpressionController>(BannerImpressionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
