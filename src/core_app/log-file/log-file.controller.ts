import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogFileService } from './log-file.service';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';

@Controller('log-file')
export class LogFileController {
  constructor(private readonly logFileService: LogFileService) {}

  @Post()
  create(@Body() createLogFileDto: CreateLogFileDto) {
    return this.logFileService.create(createLogFileDto);
  }

  @Get()
  findAll() {
    return this.logFileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logFileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogFileDto: UpdateLogFileDto) {
    return this.logFileService.update(+id, updateLogFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logFileService.remove(+id);
  }
}
