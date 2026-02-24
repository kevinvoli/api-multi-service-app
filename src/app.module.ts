import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; // Keep ConfigModule for general environment variables
import { AppController } from './app.controller';
import { AppService } from './app.service';
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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // CoreAppModule now handles TypeOrmModule.forRootAsync internally
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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
