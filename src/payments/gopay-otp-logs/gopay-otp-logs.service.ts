import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGopayOtpLogDto } from './dto/create-gopay-otp-log.dto';
import { UpdateGopayOtpLogDto } from './dto/update-gopay-otp-log.dto';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';

@Injectable()
export class GopayOtpLogsService {
  constructor(
    @InjectRepository(GopayOtpLogs)
    private readonly gopayOtpLogsRepository: Repository<GopayOtpLogs>,
  ) {}

  async create(createGopayOtpLogDto: CreateGopayOtpLogDto): Promise<GopayOtpLogs> {
    const gopayOtpLog = this.gopayOtpLogsRepository.create(createGopayOtpLogDto);
    return this.gopayOtpLogsRepository.save(gopayOtpLog);
  }

  async findAll(): Promise<GopayOtpLogs[]> {
    return this.gopayOtpLogsRepository.find();
  }

  async findOne(id: number): Promise<GopayOtpLogs> {
    const gopayOtpLog = await this.gopayOtpLogsRepository.findOne({ where: { iOtplogId: id } });
    if (!gopayOtpLog) {
      throw new NotFoundException(`GopayOtpLog with ID #${id} not found`);
    }
    return gopayOtpLog;
  }

  async update(id: number, updateGopayOtpLogDto: UpdateGopayOtpLogDto): Promise<GopayOtpLogs> {
    const gopayOtpLog = await this.gopayOtpLogsRepository.preload({
      iOtplogId: id,
      ...updateGopayOtpLogDto,
    });
    if (!gopayOtpLog) {
      throw new NotFoundException(`GopayOtpLog with ID #${id} not found`);
    }
    return this.gopayOtpLogsRepository.save(gopayOtpLog);
  }

  async remove(id: number): Promise<void> {
    const result = await this.gopayOtpLogsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`GopayOtpLog with ID #${id} not found`);
    }
  }
}