import { Test, TestingModule } from '@nestjs/testing';
import { UserProfileMasterService } from './user-profile-master.service';

describe('UserProfileMasterService', () => {
  let service: UserProfileMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserProfileMasterService],
    }).compile();

    service = module.get<UserProfileMasterService>(UserProfileMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
