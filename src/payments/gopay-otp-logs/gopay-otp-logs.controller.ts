import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { GopayOtpLogsService } from './gopay-otp-logs.service';
import { CreateGopayOtpLogDto } from './dto/create-gopay-otp-log.dto';
import { UpdateGopayOtpLogDto } from './dto/update-gopay-otp-log.dto';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';

@Controller('gopay-otp-logs')
export class GopayOtpLogsController {
  constructor(private readonly gopayOtpLogsService: GopayOtpLogsService) {}

  @Post()
  async create(@Body() createGopayOtpLogDto: CreateGopayOtpLogDto): Promise<GopayOtpLogs> {
    return this.gopayOtpLogsService.create(createGopayOtpLogDto);
  }

  @Get()
  async findAll(): Promise<GopayOtpLogs[]> {
    return this.gopayOtpLogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<GopayOtpLogs> {
    return this.gopayOtpLogsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateGopayOtpLogDto: UpdateGopayOtpLogDto): Promise<GopayOtpLogs> {
    return this.gopayOtpLogsService.update(id, updateGopayOtpLogDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.gopayOtpLogsService.remove(id);
  }
}