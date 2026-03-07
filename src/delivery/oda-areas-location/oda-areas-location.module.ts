import { Module } from '@nestjs/common';
import { OdaAreasLocation } from './entities/oda-areas-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaAreasLocationService } from './oda-areas-location.service';
import { OdaAreasLocationController } from './oda-areas-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaAreasLocation])],
  controllers: [OdaAreasLocationController],
  providers: [OdaAreasLocationService],
  exports: [TypeOrmModule.forFeature([OdaAreasLocation])],
})
export class OdaAreasLocationModule {}
