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
import { CompanyFeatureModule } from '../company/company-feature.module';
import { DocumentListModule } from '../document-list/document-list.module';
import { DocumentMasterModule } from '../document-master/document-master.module';
import { DriverServicesVideoConsultChargesModule } from '../driver-services-video-consult-charges/driver-services-video-consult-charges.module';
import { EmergencyCantactDataModule } from '../emergency-cantact-data/emergency-cantact-data.module';
import { HomeDriverModule } from '../home-driver/home-driver.module';
import { IdproofImagesModule } from '../idproof-images/idproof-images.module';
import { MaskingNumbersModule } from '../masking-numbers/masking-numbers.module';
import { MemberLoginSessionLogModule } from '../member-login-session-log/member-login-session-log.module';
import { MemberLogsModule } from '../member-logs/member-logs.module';
import { MultiLevelReferralMasterModule } from '../multi-level-referral-master/multi-level-referral-master.module';
import { SendMessageTemplatesModule } from '../send-message-templates/send-message-templates.module';
import { RatingsUserDriverModule } from './ratings-user-driver/ratings-user-driver.module';

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
    CompanyFeatureModule,
    DocumentListModule,
    DocumentMasterModule,
    DriverServicesVideoConsultChargesModule,
    EmergencyCantactDataModule,
    HomeDriverModule,
    IdproofImagesModule,
    MaskingNumbersModule,
    MemberLoginSessionLogModule,
    MemberLogsModule,
    MultiLevelReferralMasterModule,
    SendMessageTemplatesModule,
    RatingsUserDriverModule,
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
    CompanyFeatureModule,
    DocumentListModule,
    DocumentMasterModule,
    DriverServicesVideoConsultChargesModule,
    EmergencyCantactDataModule,
    HomeDriverModule,
    IdproofImagesModule,
    MaskingNumbersModule,
    MemberLoginSessionLogModule,
    MemberLogsModule,
    MultiLevelReferralMasterModule,
    SendMessageTemplatesModule,
    RatingsUserDriverModule,
  ],
})
export class UsersModule {}