import { Module } from '@nestjs/common';
import { OdaSousItemsTypesLocation } from './entities/oda-sous-items-types-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';
import { OdaSousItemsTypesLocationController } from './oda-sous-items-types-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaSousItemsTypesLocation])],
  controllers: [OdaSousItemsTypesLocationController],
  providers: [OdaSousItemsTypesLocationService],
  exports: [TypeOrmModule.forFeature([OdaSousItemsTypesLocation])],
})
export class OdaSousItemsTypesLocationModule {}
