import { Injectable } from '@nestjs/common';
import { CreateLanguageLabelDto } from './dto/create-language-label.dto';
import { UpdateLanguageLabelDto } from './dto/update-language-label.dto';

@Injectable()
export class LanguageLabelService {
  create(createLanguageLabelDto: CreateLanguageLabelDto) {
    return 'This action adds a new languageLabel';
  }

  findAll() {
    return `This action returns all languageLabel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLabel`;
  }

  update(id: number, updateLanguageLabelDto: UpdateLanguageLabelDto) {
    return `This action updates a #${id} languageLabel`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLabel`;
  }
}
