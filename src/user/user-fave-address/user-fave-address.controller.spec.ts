import { Test, TestingModule } from '@nestjs/testing';
import { UserFaveAddressController } from './user-fave-address.controller';
import { UserFaveAddressService } from './user-fave-address.service';

describe('UserFaveAddressController', () => {
  let controller: UserFaveAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFaveAddressController],
      providers: [UserFaveAddressService],
    }).compile();

    controller = module.get<UserFaveAddressController>(UserFaveAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
