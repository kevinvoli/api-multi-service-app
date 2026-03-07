import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserStatusLogs } from './entities/user-status-log.entity';
import { CreateUserStatusLogDto } from './dto/create-user-status-log.dto';
import { UpdateUserStatusLogDto } from './dto/update-user-status-log.dto';

@Injectable()
export class UserStatusLogsService {
  constructor(
    @InjectRepository(UserStatusLogs)
    private readonly repository: Repository<UserStatusLogs>,
  ) {}

  async create(createDto: CreateUserStatusLogDto): Promise<UserStatusLogs> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserStatusLogs[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserStatusLogs> {
    const entity = await this.repository.findOneBy({ iUserLogId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserStatusLogDto): Promise<UserStatusLogs> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
