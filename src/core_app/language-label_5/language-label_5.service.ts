import { Injectable } from '@nestjs/common';
import { CreateLanguageLabel5Dto } from './dto/create-language-label_5.dto';
import { UpdateLanguageLabel5Dto } from './dto/update-language-label_5.dto';

@Injectable()
export class LanguageLabel5Service {
  create(createLanguageLabel5Dto: CreateLanguageLabel5Dto) {
    return 'This action adds a new languageLabel5';
  }

  findAll() {
    return `This action returns all languageLabel5`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLabel5`;
  }

  update(id: number, updateLanguageLabel5Dto: UpdateLanguageLabel5Dto) {
    return `This action updates a #${id} languageLabel5`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLabel5`;
  }
}
