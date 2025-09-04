import { Test, TestingModule } from '@nestjs/testing';
import { OdaCommoditiesLocationController } from './oda-commodities-location.controller';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';

describe('OdaCommoditiesLocationController', () => {
  let controller: OdaCommoditiesLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaCommoditiesLocationController],
      providers: [OdaCommoditiesLocationService],
    }).compile();

    controller = module.get<OdaCommoditiesLocationController>(OdaCommoditiesLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
