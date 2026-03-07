import { Module } from '@nestjs/common';
import { OdaLocationsStatus } from './entities/oda-locations-status.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaLocationsStatusService } from './oda-locations-status.service';
import { OdaLocationsStatusController } from './oda-locations-status.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaLocationsStatus])],
  controllers: [OdaLocationsStatusController],
  providers: [OdaLocationsStatusService],
  exports: [TypeOrmModule.forFeature([OdaLocationsStatus])],
})
export class OdaLocationsStatusModule {}
