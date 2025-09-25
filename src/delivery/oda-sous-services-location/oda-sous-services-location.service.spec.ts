import { Test, TestingModule } from '@nestjs/testing';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';

describe('OdaSousServicesLocationService', () => {
  let service: OdaSousServicesLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OdaSousServicesLocationService],
    }).compile();

    service = module.get<OdaSousServicesLocationService>(OdaSousServicesLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
