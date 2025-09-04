import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { CreateGopayOtpLogDto } from './dto/create-gopay-otp-log.dto';
import { UpdateGopayOtpLogDto } from './dto/update-gopay-otp-log.dto';

@Controller('gopay-otp-logs')
export class GopayOtpLogsController {
  constructor(private readonly gopayOtpLogsService: GopayOtpLogsService) {}

  @Post()
  create(@Body() createGopayOtpLogDto: CreateGopayOtpLogDto) {
    return this.gopayOtpLogsService.create(createGopayOtpLogDto);
  }

  @Get()
  findAll() {
    return this.gopayOtpLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gopayOtpLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGopayOtpLogDto: UpdateGopayOtpLogDto) {
    return this.gopayOtpLogsService.update(+id, updateGopayOtpLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gopayOtpLogsService.remove(+id);
  }
}
