import { Test, TestingModule } from '@nestjs/testing';
import { OdaCommunesService } from './oda-communes.service';

describe('OdaCommunesService', () => {
  let service: OdaCommunesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaCommunesService],
    }).compile();

    service = module.get<OdaCommunesService>(OdaCommunesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
