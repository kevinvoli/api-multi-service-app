import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MemberLog } from './entities/member-log.entity';
import { CreateMemberLogDto } from './dto/create-member-log.dto';
import { UpdateMemberLogDto } from './dto/update-member-log.dto';

@Injectable()
export class MemberLogsService {
  constructor(
    @InjectRepository(MemberLog)
    private readonly repository: Repository<MemberLog>,
  ) {}

  async create(createDto: CreateMemberLogDto): Promise<MemberLog> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<MemberLog[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<MemberLog> {
    const entity = await this.repository.findOneBy({ iMemberLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateMemberLogDto): Promise<MemberLog> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
