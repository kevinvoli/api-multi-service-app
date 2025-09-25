import { Test, TestingModule } from '@nestjs/testing';
import { RestrictedNegativeAreaController } from './restricted-negative-area.controller';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';

describe('RestrictedNegativeAreaController', () => {
  let controller: RestrictedNegativeAreaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestrictedNegativeAreaController],
      providers: [RestrictedNegativeAreaService],
    }).compile();

    controller = module.get<RestrictedNegativeAreaController>(RestrictedNegativeAreaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
