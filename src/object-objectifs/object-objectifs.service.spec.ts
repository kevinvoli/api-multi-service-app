import { Test, TestingModule } from '@nestjs/testing';
import { ObjectObjectifsService } from './object-objectifs.service';

describe('ObjectObjectifsService', () => {
  let service: ObjectObjectifsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectObjectifsService],
    }).compile();

    service = module.get<ObjectObjectifsService>(ObjectObjectifsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
