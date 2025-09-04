import { Module } from '@nestjs/common';
import { LocationMasterService } from './location-master.service';
import { LocationMasterController } from './location-master.controller';

@Module({
  controllers: [LocationMasterController],
  providers: [LocationMasterService],
})
export class LocationMasterModule {}
