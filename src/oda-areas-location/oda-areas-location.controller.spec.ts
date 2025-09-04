import { Test, TestingModule } from '@nestjs/testing';
import { OdaAreasLocationController } from './oda-areas-location.controller';
import { OdaAreasLocationService } from './oda-areas-location.service';

describe('OdaAreasLocationController', () => {
  let controller: OdaAreasLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaAreasLocationController],
      providers: [OdaAreasLocationService],
    }).compile();

    controller = module.get<OdaAreasLocationController>(OdaAreasLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
