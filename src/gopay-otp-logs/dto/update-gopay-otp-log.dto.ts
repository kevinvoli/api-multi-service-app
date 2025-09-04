import { PartialType } from '@nestjs/mapped-types';
import { CreateGopayOtpLogDto } from './create-gopay-otp-log.dto';

export class UpdateGopayOtpLogDto extends PartialType(CreateGopayOtpLogDto) {}
