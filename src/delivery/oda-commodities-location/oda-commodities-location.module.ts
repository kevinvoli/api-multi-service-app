import { Module } from '@nestjs/common';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';
import { OdaCommoditiesLocationController } from './oda-commodities-location.controller';

@Module({
  controllers: [OdaCommoditiesLocationController],
  providers: [OdaCommoditiesLocationService],
})
export class OdaCommoditiesLocationModule {}
