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
import { CabBooking } from '../../transport/cab-booking/entities/cab-booking.entity';
import { DocumentList } from '../../users/document-list/entities/document-list.entity';
import { UserWallet } from '../../payments/user-wallet/entities/user-wallet.entity';
import { Coupon } from '../../payments/coupon/entities/coupon.entity';
import { RatingsUserDriver } from '../../users/ratings-user-driver/entities/ratings-user-driver.entity';
import { Hotel } from '../../stores/hotel/entities/hotel.entity';
import { Organization } from '../../users/company/organization/entities/organization.entity';
import { Contactus } from '../../cms/contactus/entities/contactus.entity';
import { AdminAlerts } from '../../administration/admin/admin-alerts/entities/admin-alert.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RegisterUser,
      RegisterDriver,
      Company,
      Trips,
      RestaurantOrder,
      Administrators,
      CabBooking,
      DocumentList,
      UserWallet,
      Coupon,
      RatingsUserDriver,
      Hotel,
      Organization,
      Contactus,
      AdminAlerts,
    ]),
  ],
  controllers: [AdminPanelController],
  providers: [AdminPanelService],
  exports: [AdminPanelService],
})
export class AdminPanelModule {}
