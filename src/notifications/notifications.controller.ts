import { Controller, Post, Body, UsePipes } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Public } from '../auth/decorators/public.decorator';
import { RateLimit } from '../auth/decorators/rate-limit.decorator';
import { SendOtpDto, VerifyOtpDto } from './dto/otp.dto';
import { StrictValidationPipe } from '../common/pipes/strict-validation.pipe';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  /** POST /notifications/push — Envoyer une notification FCM à un ou plusieurs tokens (admin) */
  @Post('push')
  sendPush(
    @Body('tokens') tokens: string | string[],
    @Body('data') data: Record<string, any>,
  ) {
    return this.notificationsService.sendPush(tokens, data);
  }

  /** POST /notifications/sms — Envoyer un SMS via Twilio (admin) */
  @Post('sms')
  sendSms(@Body('phone') phone: string, @Body('message') message: string) {
    return this.notificationsService.sendSms(phone, message);
  }

  /** POST /notifications/otp/send — Générer et envoyer un OTP SMS (ajax_driver_verification.php type=send) */
  @Public()
  @RateLimit(5, 60_000)
  @UsePipes(StrictValidationPipe)
  @Post('otp/send')
  sendOtp(@Body() dto: SendOtpDto) {
    return this.notificationsService.sendOtp(dto.phone);
  }

  /** POST /notifications/otp/verify — Vérifier un OTP (ajax_driver_verification.php type=verify) */
  @Public()
  @RateLimit(10, 60_000)
  @UsePipes(StrictValidationPipe)
  @Post('otp/verify')
  verifyOtp(@Body() dto: VerifyOtpDto) {
    return this.notificationsService.verifyOtp(dto.phone, dto.code);
  }
}
