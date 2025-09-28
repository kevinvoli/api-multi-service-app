import { Module } from '@nestjs/common';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';
import { FlyLocationWiseFareController } from './fly-location-wise-fare.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyLocationWiseFare } from './entities/fly-location-wise-fare.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FlyLocationWiseFare])],
  controllers: [FlyLocationWiseFareController],
  providers: [FlyLocationWiseFareService],
})
export class FlyLocationWiseFareModule {}
