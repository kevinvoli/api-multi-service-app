import { Module } from '@nestjs/common';
import { TripHelpDetailService } from './trip-help-detail.service';
import { TripHelpDetailController } from './trip-help-detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TripHelpDetail } from './entities/trip-help-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TripHelpDetail])],
  controllers: [TripHelpDetailController],
  providers: [TripHelpDetailService],
})
export class TripHelpDetailModule {}
