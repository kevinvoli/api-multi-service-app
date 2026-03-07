import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { RestaurantCartItem } from './entities/restaurant-cart-item.entity';
import { RestaurantOrder } from './entities/restaurant-order.entity';
import { OrderDetails } from '../orders/order-details/entities/order-detail.entity';
import { MenuItems } from '../delivery/menu-items/entities/menu-item.entity';
import { MenuitemOptions } from '../delivery/menu-item-options/entities/menu-item-option.entity';
import { Company } from '../users/company/entities/company.entity';
import { DeliveryCharges } from '../delivery/delivery-charges/entities/delivery-charge.entity';
import { Coupon } from '../payments/coupon/entities/coupon.entity';
import { UserAddress } from '../users/user-address/entities/user-address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RestaurantCartItem,
      RestaurantOrder,
      OrderDetails,
      MenuItems,
      MenuitemOptions,
      Company,
      DeliveryCharges,
      Coupon,
      UserAddress,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
