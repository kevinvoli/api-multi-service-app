import { Injectable } from '@nestjs/common';
import { CreateLanguagePageDetailDto } from './dto/create-language-page-detail.dto';
import { UpdateLanguagePageDetailDto } from './dto/update-language-page-detail.dto';

@Injectable()
export class LanguagePageDetailsService {
  create(createLanguagePageDetailDto: CreateLanguagePageDetailDto) {
    return 'This action adds a new languagePageDetail';
  }

  findAll() {
    return `This action returns all languagePageDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languagePageDetail`;
  }

  update(id: number, updateLanguagePageDetailDto: UpdateLanguagePageDetailDto) {
    return `This action updates a #${id} languagePageDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} languagePageDetail`;
  }
}
