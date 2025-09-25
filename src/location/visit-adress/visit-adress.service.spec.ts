import { Test, TestingModule } from '@nestjs/testing';
import { VisitAdressService } from './visit-adress.service';

describe('VisitAdressService', () => {
  let service: VisitAdressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VisitAdressService],
    }).compile();

    service = module.get<VisitAdressService>(VisitAdressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
