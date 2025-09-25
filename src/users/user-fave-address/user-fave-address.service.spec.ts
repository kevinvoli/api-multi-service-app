import { Test, TestingModule } from '@nestjs/testing';
import { UserFaveAddressService } from './user-fave-address.service';

describe('UserFaveAddressService', () => {
  let service: UserFaveAddressService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFaveAddressService],
    }).compile();

    service = module.get<UserFaveAddressService>(UserFaveAddressService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
