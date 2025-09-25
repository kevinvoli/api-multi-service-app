import { Test, TestingModule } from '@nestjs/testing';
import { RelatedCommunesController } from './related-communes.controller';
import { RelatedCommunesService } from './related-communes.service';

describe('RelatedCommunesController', () => {
  let controller: RelatedCommunesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelatedCommunesController],
      providers: [RelatedCommunesService],
    }).compile();

    controller = module.get<RelatedCommunesController>(RelatedCommunesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
