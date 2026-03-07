import { Module } from '@nestjs/common';
import { OdaItemsTypesLocation } from './entities/oda-items-types-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaItemsTypesLocationService } from './oda-items-types-location.service';
import { OdaItemsTypesLocationController } from './oda-items-types-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaItemsTypesLocation])],
  controllers: [OdaItemsTypesLocationController],
  providers: [OdaItemsTypesLocationService],
  exports: [TypeOrmModule.forFeature([OdaItemsTypesLocation])],
})
export class OdaItemsTypesLocationModule {}
