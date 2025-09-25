import { Module } from '@nestjs/common';
import { OdaAreasLocationService } from './oda-areas-location.service';
import { OdaAreasLocationController } from './oda-areas-location.controller';

@Module({
  controllers: [OdaAreasLocationController],
  providers: [OdaAreasLocationService],
})
export class OdaAreasLocationModule {}
