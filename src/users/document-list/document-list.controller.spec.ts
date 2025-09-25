import { Test, TestingModule } from '@nestjs/testing';
import { DocumentListController } from './document-list.controller';
import { DocumentListService } from './document-list.service';

describe('DocumentListController', () => {
  let controller: DocumentListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocumentListController],
      providers: [DocumentListService],
    }).compile();

    controller = module.get<DocumentListController>(DocumentListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
