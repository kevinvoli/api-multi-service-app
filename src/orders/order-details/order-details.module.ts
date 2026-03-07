import { Module } from '@nestjs/common';
import { OrderDetails } from './entities/order-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
  exports: [TypeOrmModule.forFeature([OrderDetails])],
})
export class OrderDetailsModule {}
