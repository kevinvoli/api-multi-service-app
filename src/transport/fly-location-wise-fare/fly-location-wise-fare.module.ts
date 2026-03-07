import { Module } from '@nestjs/common';
import { FlyLocationWiseFare } from './entities/fly-location-wise-fare.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlyLocationWiseFareService } from './fly-location-wise-fare.service';
import { FlyLocationWiseFareController } from './fly-location-wise-fare.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FlyLocationWiseFare])],
  controllers: [FlyLocationWiseFareController],
  providers: [FlyLocationWiseFareService],
  exports: [TypeOrmModule.forFeature([FlyLocationWiseFare])],
})
export class FlyLocationWiseFareModule {}
