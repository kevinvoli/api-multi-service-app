import { Module } from '@nestjs/common';
import { AdminLocationsService } from './admin-locations.service';
import { AdminLocationsController } from './admin-locations.controller';

@Module({
  controllers: [AdminLocationsController],
  providers: [AdminLocationsService],
})
export class AdminLocationsModule {}
