import { Module } from '@nestjs/common';
import { UserEmergencyContactService } from './user-emergency-contact.service';
import { UserEmergencyContactController } from './user-emergency-contact.controller';

@Module({
  controllers: [UserEmergencyContactController],
  providers: [UserEmergencyContactService],
})
export class UserEmergencyContactModule {}
