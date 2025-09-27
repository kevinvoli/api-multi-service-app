import { Module } from '@nestjs/common';
import { AdminLocationsService } from './admin-locations.service';
import { AdminLocationsController } from './admin-locations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminLocations } from './entities/admin-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminLocations])],
  controllers: [AdminLocationsController],
  providers: [AdminLocationsService],
})
export class AdminLocationsModule {}