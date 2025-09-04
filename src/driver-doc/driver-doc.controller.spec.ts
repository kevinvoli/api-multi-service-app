import { Test, TestingModule } from '@nestjs/testing';
import { DriverDocController } from './driver-doc.controller';
import { DriverDocService } from './driver-doc.service';

describe('DriverDocController', () => {
  let controller: DriverDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverDocController],
      providers: [DriverDocService],
    }).compile();

    controller = module.get<DriverDocController>(DriverDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
