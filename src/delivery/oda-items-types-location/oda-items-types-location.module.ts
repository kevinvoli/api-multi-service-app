import { Module } from '@nestjs/common';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';
import { OdaItemsTypesLocationController } from './oda-items-types-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaItemsTypesLocation } from './entities/oda-items-types-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaItemsTypesLocation])],
  controllers: [OdaItemsTypesLocationController],
  providers: [OdaItemsTypesLocationService],
})
export class OdaItemsTypesLocationModule {}
