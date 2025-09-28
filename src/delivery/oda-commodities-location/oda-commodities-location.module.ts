import { Module } from '@nestjs/common';
import { OdaCommoditiesLocationService } from './oda-commodities-location.service';
import { OdaCommoditiesLocationController } from './oda-commodities-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaCommoditiesLocation } from './entities/oda-commodities-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaCommoditiesLocation])],
  controllers: [OdaCommoditiesLocationController],
  providers: [OdaCommoditiesLocationService],
})
export class OdaCommoditiesLocationModule {}
