import { Module } from '@nestjs/common';
import { RegisterUserModule } from './register-user/register-user.module';
import { RegisterDriverModule } from './register-driver/register-driver.module';
import { UserProfileModule } from './user-profile/user-profile.module';
import { UserProfileMasterModule } from './user-profile-master/user-profile-master.module';
import { UserAddressModule } from './user-address/user-address.module';
import { UserEmergencyContactModule } from './user-emergency-contact/user-emergency-contact.module';
import { UserFaveAddressModule } from './user-fave-address/user-fave-address.module';
import { UserPaymentInfoModule } from './user-payment-info/user-payment-info.module';
import { UserReferrerTransactionModule } from './user-referrer-transaction/user-referrer-transaction.module';
import { UserStatusLogsModule } from './user-status-logs/user-status-logs.module';
import { UserWalletModule } from './user-wallet/user-wallet.module';
import { DriverDocModule } from './driver-doc/driver-doc.module';
import { DriverFavoritesModule } from './driver-favorites/driver-favorites.module';
import { DriverInsuranceReportModule } from './driver-insurance-report/driver-insurance-report.module';
import { DriverLogReportModule } from './driver-log-report/driver-log-report.module';
import { DriverManageTimingModule } from './driver-manage-timing/driver-manage-timing.module';
import { DriverPreferencesModule } from './driver-preferences/driver-preferences.module';
import { DriverRequestModule } from './driver-request/driver-request.module';
import { DriverRewardModule } from './driver-reward/driver-reward.module';
import { DriverSubscriptionDetailsModule } from './driver-subscription-details/driver-subscription-details.module';
import { DriverSubscriptionPlanModule } from './driver-subscription-plan/driver-subscription-plan.module';
import { DriverUserMessagesModule } from './driver-user-messages/driver-user-messages.module';
import { DriverVehicleModule } from './driver-vehicle/driver-vehicle.module';
import { DriverVehicleServiceRequestModule } from './driver-vehicle-service-request/driver-vehicle-service-request.module';

@Module({
  imports: [
    RegisterUserModule,
    RegisterDriverModule,
    UserProfileModule,
    UserProfileMasterModule,
    UserAddressModule,
    UserEmergencyContactModule,
    UserFaveAddressModule,
    UserPaymentInfoModule,
    UserReferrerTransactionModule,
    UserStatusLogsModule,
    UserWalletModule,
    DriverDocModule,
    DriverFavoritesModule,
    DriverInsuranceReportModule,
    DriverLogReportModule,
    DriverManageTimingModule,
    DriverPreferencesModule,
    DriverRequestModule,
    DriverRewardModule,
    DriverSubscriptionDetailsModule,
    DriverSubscriptionPlanModule,
    DriverUserMessagesModule,
    DriverVehicleModule,
    DriverVehicleServiceRequestModule,
  ],
  exports: [
    RegisterUserModule,
    RegisterDriverModule,
    UserProfileModule,
    UserProfileMasterModule,
    UserAddressModule,
    UserEmergencyContactModule,
    UserFaveAddressModule,
    UserPaymentInfoModule,
    UserReferrerTransactionModule,
    UserStatusLogsModule,
    UserWalletModule,
    DriverDocModule,
    DriverFavoritesModule,
    DriverInsuranceReportModule,
    DriverLogReportModule,
    DriverManageTimingModule,
    DriverPreferencesModule,
    DriverRequestModule,
    DriverRewardModule,
    DriverSubscriptionDetailsModule,
    DriverSubscriptionPlanModule,
    DriverUserMessagesModule,
    DriverVehicleModule,
    DriverVehicleServiceRequestModule,
  ],
})
export class UserModule {}
