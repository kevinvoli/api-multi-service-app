import { Test, TestingModule } from '@nestjs/testing';
import { OdaSousItemsTypesLocationController } from './oda-sous-items-types-location.controller';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';

describe('OdaSousItemsTypesLocationController', () => {
  let controller: OdaSousItemsTypesLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaSousItemsTypesLocationController],
      providers: [OdaSousItemsTypesLocationService],
    }).compile();

    controller = module.get<OdaSousItemsTypesLocationController>(OdaSousItemsTypesLocationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
