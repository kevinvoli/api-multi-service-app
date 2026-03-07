import { Module } from '@nestjs/common';
import { BackupDatabase } from './entities/backup-database.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BackupDatabaseService } from './backup-database.service';
import { BackupDatabaseController } from './backup-database.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BackupDatabase])],
  controllers: [BackupDatabaseController],
  providers: [BackupDatabaseService],
  exports: [TypeOrmModule.forFeature([BackupDatabase])],
})
export class BackupDatabaseModule {}
