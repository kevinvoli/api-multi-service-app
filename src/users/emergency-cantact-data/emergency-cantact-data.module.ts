import { Module } from '@nestjs/common';
import { EmergencyCantactDataService } from './emergency-cantact-data.service';
import { EmergencyCantactDataController } from './emergency-cantact-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmergencyContactData } from './entities/emergency-cantact-datum.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmergencyContactData])],
  controllers: [EmergencyCantactDataController],
  providers: [EmergencyCantactDataService],
})
export class EmergencyCantactDataModule {}
