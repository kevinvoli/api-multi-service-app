import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdministrationModule } from './administration/administration.module';
import { BiddingModule } from './bidding/bidding.module';
import { BusinessLogicModule } from './business-logic/business-logic.module';
import { CmsModule } from './cms/cms.module';
import { CoreAppModule } from './core_app/core_app.module';
import { DeliveryModule } from './delivery/delivery.module';
import { LocationModule } from './location/location.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { StoresModule } from './stores/stores.module';
import { TransportModule } from './transport/transport.module';
import { UsersModule } from './users/users.module';
import { VehiclesModule } from './vehicles/vehicles.module';

@Module({
  imports: [
    AdministrationModule,
    BiddingModule,
    BusinessLogicModule,
    CmsModule,
    CoreAppModule,
    DeliveryModule,
    LocationModule,
    OrdersModule,
    PaymentsModule,
    StoresModule,
    TransportModule,
    UsersModule,
    VehiclesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}