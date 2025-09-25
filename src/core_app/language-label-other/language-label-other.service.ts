import { Injectable } from '@nestjs/common';
import { CreateLanguageLabelOtherDto } from './dto/create-language-label-other.dto';
import { UpdateLanguageLabelOtherDto } from './dto/update-language-label-other.dto';

@Injectable()
export class LanguageLabelOtherService {
  create(createLanguageLabelOtherDto: CreateLanguageLabelOtherDto) {
    return 'This action adds a new languageLabelOther';
  }

  findAll() {
    return `This action returns all languageLabelOther`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageLabelOther`;
  }

  update(id: number, updateLanguageLabelOtherDto: UpdateLanguageLabelOtherDto) {
    return `This action updates a #${id} languageLabelOther`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageLabelOther`;
  }
}
