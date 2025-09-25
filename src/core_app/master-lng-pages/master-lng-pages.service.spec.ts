import { Test, TestingModule } from '@nestjs/testing';
import { MasterLngPagesService } from './master-lng-pages.service';

describe('MasterLngPagesService', () => {
  let service: MasterLngPagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MasterLngPagesService],
    }).compile();

    service = module.get<MasterLngPagesService>(MasterLngPagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
