import { Test, TestingModule } from '@nestjs/testing';
import { OdaCommunesController } from './oda-communes.controller';
import { OdaCommunesService } from './oda-communes.service';

describe('OdaCommunesController', () => {
  let controller: OdaCommunesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OdaCommunesController],
      providers: [OdaCommunesService],
    }).compile();

    controller = module.get<OdaCommunesController>(OdaCommunesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
