import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPanelService } from './admin-panel.service';
import { AdminPanelController } from './admin-panel.controller';
import { RegisterUser } from '../../users/register-user/entities/register-user.entity';
import { RegisterDriver } from '../../users/register-driver/entities/register-driver.entity';
import { Company } from '../../users/company/entities/company.entity';
import { Trips } from '../../transport/trips/entities/trip.entity';
import { RestaurantOrder } from '../../cart/entities/restaurant-order.entity';
import { Administrators } from '../administrators/entities/administrator.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RegisterUser,
      RegisterDriver,
      Company,
      Trips,
      RestaurantOrder,
      Administrators,
    ]),
  ],
  controllers: [AdminPanelController],
  providers: [AdminPanelService],
  exports: [AdminPanelService],
})
export class AdminPanelModule {}
