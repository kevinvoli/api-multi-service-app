import { Injectable } from '@nestjs/common';
import { CreateLanguageMasterDto } from './dto/create-language-master.dto';
import { UpdateLanguageMasterDto } from './dto/update-language-master.dto';

@Injectable()
export class LanguageMasterService {
  create(createLanguageMasterDto: CreateLanguageMasterDto) {
    return 'This action adds a new languageMaster';
  }

  findAll() {
    return `This action returns all languageMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageMaster`;
  }

  update(id: number, updateLanguageMasterDto: UpdateLanguageMasterDto) {
    return `This action updates a #${id} languageMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageMaster`;
  }
}
