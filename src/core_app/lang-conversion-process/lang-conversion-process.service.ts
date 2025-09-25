import { Injectable } from '@nestjs/common';
import { CreateLangConversionProcessDto } from './dto/create-lang-conversion-process.dto';
import { UpdateLangConversionProcessDto } from './dto/update-lang-conversion-process.dto';

@Injectable()
export class LangConversionProcessService {
  create(createLangConversionProcessDto: CreateLangConversionProcessDto) {
    return 'This action adds a new langConversionProcess';
  }

  findAll() {
    return `This action returns all langConversionProcess`;
  }

  findOne(id: number) {
    return `This action returns a #${id} langConversionProcess`;
  }

  update(id: number, updateLangConversionProcessDto: UpdateLangConversionProcessDto) {
    return `This action updates a #${id} langConversionProcess`;
  }

  remove(id: number) {
    return `This action removes a #${id} langConversionProcess`;
  }
}
