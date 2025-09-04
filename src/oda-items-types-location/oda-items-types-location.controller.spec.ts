import { Test, TestingModule } from '@nestjs/testing';
import { OdaItemsTypesLocationController } from './oda-items-types-location.controller';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';

describe('OdaItemsTypesLocationController', () => {
  let controller: OdaItemsTypesLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaItemsTypesLocationController],
      providers: [OdaItemsTypesLocationService],
    }).compile();

    controller = module.get<OdaItemsTypesLocationController>(OdaItemsTypesLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
