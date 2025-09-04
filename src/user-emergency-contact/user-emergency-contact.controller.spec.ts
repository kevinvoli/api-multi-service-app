import { Test, TestingModule } from '@nestjs/testing';
import { UserEmergencyContactController } from './user-emergency-contact.controller';
import { UserEmergencyContactService } from './user-emergency-contact.service';

describe('UserEmergencyContactController', () => {
  let controller: UserEmergencyContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserEmergencyContactController],
      providers: [UserEmergencyContactService],
    }).compile();

    controller = module.get<UserEmergencyContactController>(UserEmergencyContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
