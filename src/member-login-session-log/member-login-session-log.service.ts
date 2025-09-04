import { Injectable } from '@nestjs/common';
import { CreateMemberLoginSessionLogDto } from './dto/create-member-login-session-log.dto';
import { UpdateMemberLoginSessionLogDto } from './dto/update-member-login-session-log.dto';

@Injectable()
export class MemberLoginSessionLogService {
  create(createMemberLoginSessionLogDto: CreateMemberLoginSessionLogDto) {
    return 'This action adds a new memberLoginSessionLog';
  }

  findAll() {
    return `This action returns all memberLoginSessionLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memberLoginSessionLog`;
  }

  update(id: number, updateMemberLoginSessionLogDto: UpdateMemberLoginSessionLogDto) {
    return `This action updates a #${id} memberLoginSessionLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} memberLoginSessionLog`;
  }
}
