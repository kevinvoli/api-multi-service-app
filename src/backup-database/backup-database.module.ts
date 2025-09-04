import { Module } from '@nestjs/common';
import { BackupDatabaseService } from './backup-database.service';
import { BackupDatabaseController } from './backup-database.controller';

@Module({
  controllers: [BackupDatabaseController],
  providers: [BackupDatabaseService],
})
export class BackupDatabaseModule {}
