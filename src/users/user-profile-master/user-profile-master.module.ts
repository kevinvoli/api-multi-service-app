import { Module } from '@nestjs/common';
import { UserProfileMaster } from './entities/user-profile-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfileMasterService } from './user-profile-master.service';
import { UserProfileMasterController } from './user-profile-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserProfileMaster])],
  controllers: [UserProfileMasterController],
  providers: [UserProfileMasterService],
  exports: [TypeOrmModule.forFeature([UserProfileMaster])],
})
export class UserProfileMasterModule {}
