import { Test, TestingModule } from '@nestjs/testing';
import { ObjectProspectionsService } from './object-prospections.service';

describe('ObjectProspectionsService', () => {
  let service: ObjectProspectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectProspectionsService],
    }).compile();

    service = module.get<ObjectProspectionsService>(ObjectProspectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
