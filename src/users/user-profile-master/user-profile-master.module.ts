import { Module } from '@nestjs/common';
import { UserProfileMasterService } from './user-profile-master.service';
import { UserProfileMasterController } from './user-profile-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileMaster } from './entities/user-profile-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfileMaster])],
  controllers: [UserProfileMasterController],
  providers: [UserProfileMasterService],
})
export class UserProfileMasterModule {}
