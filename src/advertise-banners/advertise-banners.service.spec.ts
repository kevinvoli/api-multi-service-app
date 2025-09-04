import { Test, TestingModule } from '@nestjs/testing';
import { AdvertiseBannersService } from './advertise-banners.service';

describe('AdvertiseBannersService', () => {
  let service: AdvertiseBannersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdvertiseBannersService],
    }).compile();

    service = module.get<AdvertiseBannersService>(AdvertiseBannersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
