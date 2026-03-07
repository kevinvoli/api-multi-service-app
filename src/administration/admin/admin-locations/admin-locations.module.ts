import { Module } from '@nestjs/common';
import { AdminLocations } from './entities/admin-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminLocationsService } from './admin-locations.service';
import { AdminLocationsController } from './admin-locations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AdminLocations])],
  controllers: [AdminLocationsController],
  providers: [AdminLocationsService],
  exports: [TypeOrmModule.forFeature([AdminLocations])],
})
export class AdminLocationsModule {}
