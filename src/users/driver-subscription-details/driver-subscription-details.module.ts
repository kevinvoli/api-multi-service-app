import { Module } from '@nestjs/common';
import { DriverSubscriptionDetails } from './entities/driver-subscription-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverSubscriptionDetailsService } from './driver-subscription-details.service';
import { DriverSubscriptionDetailsController } from './driver-subscription-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DriverSubscriptionDetails])],
  controllers: [DriverSubscriptionDetailsController],
  providers: [DriverSubscriptionDetailsService],
  exports: [TypeOrmModule.forFeature([DriverSubscriptionDetails])],
})
export class DriverSubscriptionDetailsModule {}
