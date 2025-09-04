import { Module } from '@nestjs/common';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';
import { OdaItemsTypesLocationController } from './oda-items-types-location.controller';

@Module({
  controllers: [OdaItemsTypesLocationController],
  providers: [OdaItemsTypesLocationService],
})
export class OdaItemsTypesLocationModule {}
