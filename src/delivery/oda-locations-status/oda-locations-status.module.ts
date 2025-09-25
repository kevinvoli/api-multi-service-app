import { Module } from '@nestjs/common';
import { OdaLocationsStatusService } from './oda-locations-status.service';
import { OdaLocationsStatusController } from './oda-locations-status.controller';

@Module({
  controllers: [OdaLocationsStatusController],
  providers: [OdaLocationsStatusService],
})
export class OdaLocationsStatusModule {}
