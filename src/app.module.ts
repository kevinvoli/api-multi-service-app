import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { FareModule } from './fare/fare.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AdministrationModule } from './administration/administration.module';
import { BiddingModule } from './bidding/bidding.module';
import { BusinessLogicModule } from './business-logic/business-logic.module';
import { CmsModule } from './cms/cms.module';
import { CoreAppModule } from './core_app/core_app.module'; // CoreAppModule already imports DatabaseModule
import { DeliveryModule } from './delivery/delivery.module';
import { LocationModule } from './location/location.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { StoresModule } from './stores/stores.module';
import { TransportModule } from './transport/transport.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { GeoModule } from './geo/geo.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    CartModule,
    FareModule,
    NotificationsModule,
    CoreAppModule,
    AdministrationModule,
    BiddingModule,
    BusinessLogicModule,
    CmsModule,
    DeliveryModule,
    LocationModule,
    OrdersModule,
    PaymentsModule,
    StoresModule,
    TransportModule,
    UsersModule,
    VehiclesModule,
    GeoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
