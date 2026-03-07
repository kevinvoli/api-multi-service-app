import { Controller, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  /** POST /notifications/push — Envoyer une notification FCM à un ou plusieurs tokens */
  @Post('push')
  sendPush(
    @Body('tokens') tokens: string | string[],
    @Body('data') data: Record<string, any>,
  ) {
    return this.notificationsService.sendPush(tokens, data);
  }

  /** POST /notifications/sms — Envoyer un SMS via Twilio */
  @Post('sms')
  sendSms(
    @Body('phone') phone: string,
    @Body('message') message: string,
  ) {
    return this.notificationsService.sendSms(phone, message);
  }

  /** POST /notifications/otp/send — Générer et envoyer un OTP SMS (ajax_driver_verification.php type=send) */
  @Post('otp/send')
  sendOtp(@Body('phone') phone: string) {
    return this.notificationsService.sendOtp(phone);
  }

  /** POST /notifications/otp/verify — Vérifier un OTP (ajax_driver_verification.php type=verify) */
  @Post('otp/verify')
  verifyOtp(
    @Body('phone') phone: string,
    @Body('code') code: string,
  ) {
    return this.notificationsService.verifyOtp(phone, code);
  }
}
