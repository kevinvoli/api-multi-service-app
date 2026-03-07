import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BackupDatabase } from './entities/backup-database.entity';
import { CreateBackupDatabaseDto } from './dto/create-backup-database.dto';
import { UpdateBackupDatabaseDto } from './dto/update-backup-database.dto';

@Injectable()
export class BackupDatabaseService {
  constructor(
    @InjectRepository(BackupDatabase)
    private readonly repository: Repository<BackupDatabase>,
  ) {}

  async create(createDto: CreateBackupDatabaseDto): Promise<BackupDatabase> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BackupDatabase[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BackupDatabase> {
    const entity = await this.repository.findOneBy({ iBackupId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBackupDatabaseDto): Promise<BackupDatabase> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
