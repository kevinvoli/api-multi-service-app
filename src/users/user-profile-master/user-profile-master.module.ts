import { Module } from '@nestjs/common';
import { UserProfileMasterService } from './user-profile-master.service';
import { UserProfileMasterController } from './user-profile-master.controller';

@Module({
  controllers: [UserProfileMasterController],
  providers: [UserProfileMasterService],
})
export class UserProfileMasterModule {}
