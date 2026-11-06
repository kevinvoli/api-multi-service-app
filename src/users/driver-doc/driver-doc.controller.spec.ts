import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DriverDocController } from './driver-doc.controller';
import { DriverDocService } from './driver-doc.service';
import { DriverDoc } from './entities/driver-doc.entity';

describe('DriverDocController', () => {
  let controller: DriverDocController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverDocController],
      providers: [
        DriverDocService,
        { provide: getRepositoryToken(DriverDoc), useValue: {} },
      ],
    }).compile();

    controller = module.get<DriverDocController>(DriverDocController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
