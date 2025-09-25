import { Injectable } from '@nestjs/common';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';

@Injectable()
export class IntentionsCriteresService {
  create(createIntentionsCritereDto: CreateIntentionsCritereDto) {
    return 'This action adds a new intentionsCritere';
  }

  findAll() {
    return `This action returns all intentionsCriteres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intentionsCritere`;
  }

  update(id: number, updateIntentionsCritereDto: UpdateIntentionsCritereDto) {
    return `This action updates a #${id} intentionsCritere`;
  }

  remove(id: number) {
    return `This action removes a #${id} intentionsCritere`;
  }
}
