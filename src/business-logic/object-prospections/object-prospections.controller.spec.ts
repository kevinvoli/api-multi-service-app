import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ObjectProspectionsController } from './object-prospections.controller';
import { ObjectProspectionsService } from './object-prospections.service';
import { ObjectProspections } from './entities/object-prospection.entity';

describe('ObjectProspectionsController', () => {
  let controller: ObjectProspectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectProspectionsController],
      providers: [
        ObjectProspectionsService,
        { provide: getRepositoryToken(ObjectProspections), useValue: {} },
      ],
    }).compile();

    controller = module.get<ObjectProspectionsController>(
      ObjectProspectionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
