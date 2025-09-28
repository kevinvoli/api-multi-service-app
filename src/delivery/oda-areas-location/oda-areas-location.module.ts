import { Module } from '@nestjs/common';
import { OdaAreasLocationService } from './oda-areas-location.service';
import { OdaAreasLocationController } from './oda-areas-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaAreasLocation } from './entities/oda-areas-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaAreasLocation])],
  controllers: [OdaAreasLocationController],
  providers: [OdaAreasLocationService],
})
export class OdaAreasLocationModule {}
