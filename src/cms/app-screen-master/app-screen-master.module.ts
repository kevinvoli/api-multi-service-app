import { Module } from '@nestjs/common';
import { AppScreenMasterService } from './app-screen-master.service';
import { AppScreenMasterController } from './app-screen-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppScreenMaster } from './entities/app-screen-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppScreenMaster])],
  controllers: [AppScreenMasterController],
  providers: [AppScreenMasterService],
})
export class AppScreenMasterModule {}