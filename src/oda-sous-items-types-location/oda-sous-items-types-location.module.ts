import { Module } from '@nestjs/common';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';
import { OdaSousItemsTypesLocationController } from './oda-sous-items-types-location.controller';

@Module({
  controllers: [OdaSousItemsTypesLocationController],
  providers: [OdaSousItemsTypesLocationService],
})
export class OdaSousItemsTypesLocationModule {}
