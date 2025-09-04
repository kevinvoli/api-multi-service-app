import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BackupDatabaseService } from './backup-database.service';
import { CreateBackupDatabaseDto } from './dto/create-backup-database.dto';
import { UpdateBackupDatabaseDto } from './dto/update-backup-database.dto';

@Controller('backup-database')
export class BackupDatabaseController {
  constructor(private readonly backupDatabaseService: BackupDatabaseService) {}

  @Post()
  create(@Body() createBackupDatabaseDto: CreateBackupDatabaseDto) {
    return this.backupDatabaseService.create(createBackupDatabaseDto);
  }

  @Get()
  findAll() {
    return this.backupDatabaseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.backupDatabaseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBackupDatabaseDto: UpdateBackupDatabaseDto) {
    return this.backupDatabaseService.update(+id, updateBackupDatabaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.backupDatabaseService.remove(+id);
  }
}
