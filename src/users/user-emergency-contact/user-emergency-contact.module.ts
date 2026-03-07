import { Module } from '@nestjs/common';
import { UserEmergencyContact } from './entities/user-emergency-contact.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEmergencyContactService } from './user-emergency-contact.service';
import { UserEmergencyContactController } from './user-emergency-contact.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEmergencyContact])],
  controllers: [UserEmergencyContactController],
  providers: [UserEmergencyContactService],
  exports: [TypeOrmModule.forFeature([UserEmergencyContact])],
})
export class UserEmergencyContactModule {}
