import { Injectable } from '@nestjs/common';
import { CreateLogFileDto } from './dto/create-log-file.dto';
import { UpdateLogFileDto } from './dto/update-log-file.dto';

@Injectable()
export class LogFileService {
  create(createLogFileDto: CreateLogFileDto) {
    return 'This action adds a new logFile';
  }

  findAll() {
    return `This action returns all logFile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logFile`;
  }

  update(id: number, updateLogFileDto: UpdateLogFileDto) {
    return `This action updates a #${id} logFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} logFile`;
  }
}
