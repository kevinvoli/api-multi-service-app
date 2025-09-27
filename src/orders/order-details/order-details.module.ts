import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderDetails])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
  exports: [TypeOrmModule],
})
export class OrderDetailsModule {}
