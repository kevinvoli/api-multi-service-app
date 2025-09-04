import { Injectable } from '@nestjs/common';
import { CreateLanguageLabel2Dto } from './dto/create-language-label_2.dto';
import { UpdateLanguageLabel2Dto } from './dto/update-language-label_2.dto';

@Injectable()
export class LanguageLabel2Service {
  create(createLanguageLabel2Dto: CreateLanguageLabel2Dto) {
    return 'This action adds a new languageLabel2';
  }

  findAll() {
    return `This action returns all languageLabel2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLabel2`;
  }

  update(id: number, updateLanguageLabel2Dto: UpdateLanguageLabel2Dto) {
    return `This action updates a #${id} languageLabel2`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLabel2`;
  }
}
