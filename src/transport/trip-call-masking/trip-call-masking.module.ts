import { Module } from '@nestjs/common';
import { TripCallMasking } from './entities/trip-call-masking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripCallMaskingService } from './trip-call-masking.service';
import { TripCallMaskingController } from './trip-call-masking.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TripCallMasking])],
  controllers: [TripCallMaskingController],
  providers: [TripCallMaskingService],
  exports: [TypeOrmModule.forFeature([TripCallMasking])],
})
export class TripCallMaskingModule {}
