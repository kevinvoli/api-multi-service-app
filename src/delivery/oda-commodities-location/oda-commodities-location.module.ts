import { Module } from '@nestjs/common';
import { OdaCommoditiesLocation } from './entities/oda-commodities-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';
import { OdaCommoditiesLocationController } from './oda-commodities-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaCommoditiesLocation])],
  controllers: [OdaCommoditiesLocationController],
  providers: [OdaCommoditiesLocationService],
  exports: [TypeOrmModule.forFeature([OdaCommoditiesLocation])],
})
export class OdaCommoditiesLocationModule {}
