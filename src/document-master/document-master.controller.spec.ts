import { Test, TestingModule } from '@nestjs/testing';
import { DocumentMasterController } from './document-master.controller';
import { DocumentMasterService } from './document-master.service';

describe('DocumentMasterController', () => {
  let controller: DocumentMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentMasterController],
      providers: [DocumentMasterService],
    }).compile();

    controller = module.get<DocumentMasterController>(DocumentMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
