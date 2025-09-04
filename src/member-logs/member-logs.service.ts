import { Injectable } from '@nestjs/common';
import { CreateMemberLogDto } from './dto/create-member-log.dto';
import { UpdateMemberLogDto } from './dto/update-member-log.dto';

@Injectable()
export class MemberLogsService {
  create(createMemberLogDto: CreateMemberLogDto) {
    return 'This action adds a new memberLog';
  }

  findAll() {
    return `This action returns all memberLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberLog`;
  }

  update(id: number, updateMemberLogDto: UpdateMemberLogDto) {
    return `This action updates a #${id} memberLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberLog`;
  }
}
