import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberLoginSessionLog } from './entities/member-login-session-log.entity';
import { CreateMemberLoginSessionLogDto } from './dto/create-member-login-session-log.dto';
import { UpdateMemberLoginSessionLogDto } from './dto/update-member-login-session-log.dto';

@Injectable()
export class MemberLoginSessionLogService {
  constructor(
    @InjectRepository(MemberLoginSessionLog)
    private readonly repository: Repository<MemberLoginSessionLog>,
  ) {}

  async create(createDto: CreateMemberLoginSessionLogDto): Promise<MemberLoginSessionLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MemberLoginSessionLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MemberLoginSessionLog> {
    const entity = await this.repository.findOneBy({ iSessionLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMemberLoginSessionLogDto): Promise<MemberLoginSessionLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
