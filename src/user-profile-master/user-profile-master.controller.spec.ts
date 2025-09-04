import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileMasterController } from './user-profile-master.controller';
import { UserProfileMasterService } from './user-profile-master.service';

describe('UserProfileMasterController', () => {
  let controller: UserProfileMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserProfileMasterController],
      providers: [UserProfileMasterService],
    }).compile();

    controller = module.get<UserProfileMasterController>(UserProfileMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
