import { Module } from '@nestjs/common';
import { BackupDatabaseService } from './backup-database.service';
import { BackupDatabaseController } from './backup-database.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackupDatabase } from './entities/backup-database.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BackupDatabase])],
  controllers: [BackupDatabaseController],
  providers: [BackupDatabaseService],
})
export class BackupDatabaseModule {}
