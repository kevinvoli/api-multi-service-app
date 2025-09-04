import { Test, TestingModule } from '@nestjs/testing';
import { UserEmergencyContactService } from './user-emergency-contact.service';

describe('UserEmergencyContactService', () => {
  let service: UserEmergencyContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserEmergencyContactService],
    }).compile();

    service = module.get<UserEmergencyContactService>(UserEmergencyContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
