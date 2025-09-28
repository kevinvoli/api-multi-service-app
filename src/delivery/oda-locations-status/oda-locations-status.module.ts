import { Module } from '@nestjs/common';
import { OdaLocationsStatusService } from './oda-locations-status.service';
import { OdaLocationsStatusController } from './oda-locations-status.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaLocationsStatus } from './entities/oda-locations-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaLocationsStatus
  ])],
  controllers: [OdaLocationsStatusController],
  providers: [OdaLocationsStatusService],
})
export class OdaLocationsStatusModule {}
