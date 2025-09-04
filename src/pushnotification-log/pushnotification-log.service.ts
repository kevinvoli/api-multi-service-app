import { Injectable } from '@nestjs/common';
import { CreatePushnotificationLogDto } from './dto/create-pushnotification-log.dto';
import { UpdatePushnotificationLogDto } from './dto/update-pushnotification-log.dto';

@Injectable()
export class PushnotificationLogService {
  create(createPushnotificationLogDto: CreatePushnotificationLogDto) {
    return 'This action adds a new pushnotificationLog';
  }

  findAll() {
    return `This action returns all pushnotificationLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pushnotificationLog`;
  }

  update(id: number, updatePushnotificationLogDto: UpdatePushnotificationLogDto) {
    return `This action updates a #${id} pushnotificationLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} pushnotificationLog`;
  }
}
