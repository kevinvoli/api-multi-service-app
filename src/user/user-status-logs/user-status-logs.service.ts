import { Injectable } from '@nestjs/common';
import { CreateUserStatusLogDto } from './dto/create-user-status-log.dto';
import { UpdateUserStatusLogDto } from './dto/update-user-status-log.dto';

@Injectable()
export class UserStatusLogsService {
  create(createUserStatusLogDto: CreateUserStatusLogDto) {
    return 'This action adds a new userStatusLog';
  }

  findAll() {
    return `This action returns all userStatusLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userStatusLog`;
  }

  update(id: number, updateUserStatusLogDto: UpdateUserStatusLogDto) {
    return `This action updates a #${id} userStatusLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} userStatusLog`;
  }
}
