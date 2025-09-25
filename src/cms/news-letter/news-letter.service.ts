import { Injectable } from '@nestjs/common';
import { CreateNewsLetterDto } from './dto/create-news-letter.dto';
import { UpdateNewsLetterDto } from './dto/update-news-letter.dto';

@Injectable()
export class NewsLetterService {
  create(createNewsLetterDto: CreateNewsLetterDto) {
    return 'This action adds a new newsLetter';
  }

  findAll() {
    return `This action returns all newsLetter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} newsLetter`;
  }

  update(id: number, updateNewsLetterDto: UpdateNewsLetterDto) {
    return `This action updates a #${id} newsLetter`;
  }

  remove(id: number) {
    return `This action removes a #${id} newsLetter`;
  }
}
