import { Module } from '@nestjs/common';
import { OdaSousItemsTypesLocationService } from './oda-sous-items-types-location.service';
import { OdaSousItemsTypesLocationController } from './oda-sous-items-types-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaSousItemsTypesLocation } from './entities/oda-sous-items-types-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaSousItemsTypesLocation
  ])],
  controllers: [OdaSousItemsTypesLocationController],
  providers: [OdaSousItemsTypesLocationService],
})
export class OdaSousItemsTypesLocationModule {}
