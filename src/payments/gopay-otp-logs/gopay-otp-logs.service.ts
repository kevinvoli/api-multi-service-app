import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GopayOtpLogs } from './entities/gopay-otp-log.entity';
import { CreateGopayOtpLogDto } from './dto/create-gopay-otp-log.dto';
import { UpdateGopayOtpLogDto } from './dto/update-gopay-otp-log.dto';

@Injectable()
export class GopayOtpLogsService {
  constructor(
    @InjectRepository(GopayOtpLogs)
    private readonly repository: Repository<GopayOtpLogs>,
  ) {}

  async create(createDto: CreateGopayOtpLogDto): Promise<GopayOtpLogs> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<GopayOtpLogs[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<GopayOtpLogs> {
    const entity = await this.repository.findOneBy({ iOtplogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateGopayOtpLogDto): Promise<GopayOtpLogs> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
