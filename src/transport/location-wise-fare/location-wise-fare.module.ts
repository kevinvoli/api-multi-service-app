import { Module } from '@nestjs/common';
import { LocationWiseFareService } from './location-wise-fare.service';
import { LocationWiseFareController } from './location-wise-fare.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationWiseFare } from './entities/location-wise-fare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LocationWiseFare])],
  controllers: [LocationWiseFareController],
  providers: [LocationWiseFareService],
})
export class LocationWiseFareModule {}
