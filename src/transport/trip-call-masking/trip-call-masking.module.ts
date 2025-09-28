import { Module } from '@nestjs/common';
import { TripCallMaskingService } from './trip-call-masking.service';
import { TripCallMaskingController } from './trip-call-masking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripCallMasking } from './entities/trip-call-masking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripCallMasking])],
  controllers: [TripCallMaskingController],
  providers: [TripCallMaskingService],
})
export class TripCallMaskingModule {}
