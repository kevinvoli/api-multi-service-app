import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { ConfigurationsPaymentLogModule } from './configurations-payment-log/configurations-payment-log.module';
import { ConfigurationsPaymentsModule } from './configurations-payments/configurations-payments.module';
import { CouponModule } from './coupon/coupon.module';
import { CurrencyModule } from './currency/currency.module';
import { GopayOtpLogsModule } from './gopay-otp-logs/gopay-otp-logs.module';
import { MasterCurrencyModule } from './master-currency/master-currency.module';
import { PaymentCustomerInfoModule } from './payment-customer-info/payment-customer-info.module';
import { PaymentModelUserLogModule } from './payment-model-user-log/payment-model-user-log.module';
import { PaymentRequestsModule } from './payment-requests/payment-requests.module';
import { PaymentTransactionsModule } from './payment-transactions/payment-transactions.module';
import { PlanPurchaseMasterModule } from './plan-purchase-master/plan-purchase-master.module';
import { RewardCompaignModule } from './reward-compaign/reward-compaign.module';
import { RewardSettingsModule } from './reward-settings/reward-settings.module';
import { UserWalletModule } from './user-wallet/user-wallet.module';
import { WalletMoneyReferrerEmailModule } from './wallet-money-referrer-email/wallet-money-referrer-email.module';
import { WithdrawRequestsModule } from './withdraw-requests/withdraw-requests.module';

@Module({
  imports: [
    ConfigurationsPaymentLogModule,
    ConfigurationsPaymentsModule,
    CouponModule,
    CurrencyModule,
    GopayOtpLogsModule,
    MasterCurrencyModule,
    PaymentCustomerInfoModule,
    PaymentModelUserLogModule,
    PaymentRequestsModule,
    PaymentTransactionsModule,
    PlanPurchaseMasterModule,
    RewardCompaignModule,
    RewardSettingsModule,
    UserWalletModule,
    WalletMoneyReferrerEmailModule,
    WithdrawRequestsModule,
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
  exports: [
    ConfigurationsPaymentLogModule,
    ConfigurationsPaymentsModule,
    CouponModule,
    CurrencyModule,
    GopayOtpLogsModule,
    MasterCurrencyModule,
    PaymentCustomerInfoModule,
    PaymentModelUserLogModule,
    PaymentRequestsModule,
    PaymentTransactionsModule,
    PlanPurchaseMasterModule,
    RewardCompaignModule,
    RewardSettingsModule,
    UserWalletModule,
    WalletMoneyReferrerEmailModule,
    WithdrawRequestsModule,
  ],
})
export class PaymentsModule {}