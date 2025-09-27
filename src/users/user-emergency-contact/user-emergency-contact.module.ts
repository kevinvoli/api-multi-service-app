import { Module } from '@nestjs/common';
import { UserEmergencyContactService } from './user-emergency-contact.service';
import { UserEmergencyContactController } from './user-emergency-contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEmergencyContact } from './entities/user-emergency-contact.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEmergencyContact])],
  controllers: [UserEmergencyContactController],
  providers: [UserEmergencyContactService],
})
export class UserEmergencyContactModule {}
