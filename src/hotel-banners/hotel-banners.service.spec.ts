import { Test, TestingModule } from '@nestjs/testing';
import { HotelBannersService } from './hotel-banners.service';

describe('HotelBannersService', () => {
  let service: HotelBannersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelBannersService],
    }).compile();

    service = module.get<HotelBannersService>(HotelBannersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
