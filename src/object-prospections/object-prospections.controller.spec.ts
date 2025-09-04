import { Test, TestingModule } from '@nestjs/testing';
import { ObjectProspectionsController } from './object-prospections.controller';
import { ObjectProspectionsService } from './object-prospections.service';

describe('ObjectProspectionsController', () => {
  let controller: ObjectProspectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectProspectionsController],
      providers: [ObjectProspectionsService],
    }).compile();

    controller = module.get<ObjectProspectionsController>(ObjectProspectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
