import { Test, TestingModule } from '@nestjs/testing';
import { VisitAdressController } from './visit-adress.controller';
import { VisitAdressService } from './visit-adress.service';

describe('VisitAdressController', () => {
  let controller: VisitAdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VisitAdressController],
      providers: [VisitAdressService],
    }).compile();

    controller = module.get<VisitAdressController>(VisitAdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
