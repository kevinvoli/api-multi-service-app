import { Module } from '@nestjs/common';
import { LocationMasterService } from './location-master.service';
import { LocationMasterController } from './location-master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationMaster } from './entities/location-master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationMaster])],
  controllers: [LocationMasterController],
  providers: [LocationMasterService],
})
export class LocationMasterModule {}