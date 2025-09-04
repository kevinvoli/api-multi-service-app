import { Test, TestingModule } from '@nestjs/testing';
import { PackageTypeController } from './package-type.controller';
import { PackageTypeService } from './package-type.service';

describe('PackageTypeController', () => {
  let controller: PackageTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PackageTypeController],
      providers: [PackageTypeService],
    }).compile();

    controller = module.get<PackageTypeController>(PackageTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
