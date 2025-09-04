import { Injectable } from '@nestjs/common';
import { CreateLanguageLabel1Dto } from './dto/create-language-label_1.dto';
import { UpdateLanguageLabel1Dto } from './dto/update-language-label_1.dto';

@Injectable()
export class LanguageLabel1Service {
  create(createLanguageLabel1Dto: CreateLanguageLabel1Dto) {
    return 'This action adds a new languageLabel1';
  }

  findAll() {
    return `This action returns all languageLabel1`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLabel1`;
  }

  update(id: number, updateLanguageLabel1Dto: UpdateLanguageLabel1Dto) {
    return `This action updates a #${id} languageLabel1`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLabel1`;
  }
}
