import { Module } from '@nestjs/common';
import { AppScreenMaster } from './entities/app-screen-master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppScreenMasterService } from './app-screen-master.service';
import { AppScreenMasterController } from './app-screen-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AppScreenMaster])],
  controllers: [AppScreenMasterController],
  providers: [AppScreenMasterService],
  exports: [TypeOrmModule.forFeature([AppScreenMaster])],
})
export class AppScreenMasterModule {}
