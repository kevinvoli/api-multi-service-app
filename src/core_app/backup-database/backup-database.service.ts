import { Injectable } from '@nestjs/common';
import { CreateBackupDatabaseDto } from './dto/create-backup-database.dto';
import { UpdateBackupDatabaseDto } from './dto/update-backup-database.dto';

@Injectable()
export class BackupDatabaseService {
  create(createBackupDatabaseDto: CreateBackupDatabaseDto) {
    return 'This action adds a new backupDatabase';
  }

  findAll() {
    return `This action returns all backupDatabase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} backupDatabase`;
  }

  update(id: number, updateBackupDatabaseDto: UpdateBackupDatabaseDto) {
    return `This action updates a #${id} backupDatabase`;
  }

  remove(id: number) {
    return `This action removes a #${id} backupDatabase`;
  }
}
