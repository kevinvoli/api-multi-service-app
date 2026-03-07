import { Module } from '@nestjs/common';
import { LocationWiseFare } from './entities/location-wise-fare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationWiseFareService } from './location-wise-fare.service';
import { LocationWiseFareController } from './location-wise-fare.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LocationWiseFare])],
  controllers: [LocationWiseFareController],
  providers: [LocationWiseFareService],
  exports: [TypeOrmModule.forFeature([LocationWiseFare])],
})
export class LocationWiseFareModule {}
