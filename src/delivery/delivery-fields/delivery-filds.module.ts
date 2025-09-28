import { Module } from '@nestjs/common';
import { DeliveryFildsService } from './delivery-filds.service';
import { DeliveryFildsController } from './delivery-filds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeliveryFields } from './entities/delivery-field.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeliveryFields])],
  controllers: [DeliveryFildsController],
  providers: [DeliveryFildsService],
})
export class DeliveryFildsModule {}
