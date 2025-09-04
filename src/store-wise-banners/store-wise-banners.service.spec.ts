import { Test, TestingModule } from '@nestjs/testing';
import { StoreWiseBannersService } from './store-wise-banners.service';

describe('StoreWiseBannersService', () => {
  let service: StoreWiseBannersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StoreWiseBannersService],
    }).compile();

    service = module.get<StoreWiseBannersService>(StoreWiseBannersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
