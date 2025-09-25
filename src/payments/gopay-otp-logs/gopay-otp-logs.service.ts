import { Injectable } from '@nestjs/common';
import { CreateGopayOtpLogDto } from './dto/create-gopay-otp-log.dto';
import { UpdateGopayOtpLogDto } from './dto/update-gopay-otp-log.dto';

@Injectable()
export class GopayOtpLogsService {
  create(createGopayOtpLogDto: CreateGopayOtpLogDto) {
    return 'This action adds a new gopayOtpLog';
  }

  findAll() {
    return `This action returns all gopayOtpLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gopayOtpLog`;
  }

  update(id: number, updateGopayOtpLogDto: UpdateGopayOtpLogDto) {
    return `This action updates a #${id} gopayOtpLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} gopayOtpLog`;
  }
}
