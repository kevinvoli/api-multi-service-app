import { Module } from '@nestjs/common';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';
import { EmergencyCantactDataController } from './emergency-cantact-data.controller';

@Module({
  controllers: [EmergencyCantactDataController],
  providers: [EmergencyCantactDataService],
})
export class EmergencyCantactDataModule {}
