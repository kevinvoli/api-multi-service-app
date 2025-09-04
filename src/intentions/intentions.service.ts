import { Injectable } from '@nestjs/common';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

@Injectable()
export class IntentionsService {
  create(createIntentionDto: CreateIntentionDto) {
    return 'This action adds a new intention';
  }

  findAll() {
    return `This action returns all intentions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intention`;
  }

  update(id: number, updateIntentionDto: UpdateIntentionDto) {
    return `This action updates a #${id} intention`;
  }

  remove(id: number) {
    return `This action removes a #${id} intention`;
  }
}
