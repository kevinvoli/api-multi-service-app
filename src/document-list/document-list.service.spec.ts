import { Test, TestingModule } from '@nestjs/testing';
import { DocumentListService } from './document-list.service';

describe('DocumentListService', () => {
  let service: DocumentListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocumentListService],
    }).compile();

    service = module.get<DocumentListService>(DocumentListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
