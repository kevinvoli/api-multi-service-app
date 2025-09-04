import { Test, TestingModule } from '@nestjs/testing';
import { OdaSousServicesLocationController } from './oda-sous-services-location.controller';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';

describe('OdaSousServicesLocationController', () => {
  let controller: OdaSousServicesLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaSousServicesLocationController],
      providers: [OdaSousServicesLocationService],
    }).compile();

    controller = module.get<OdaSousServicesLocationController>(OdaSousServicesLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
