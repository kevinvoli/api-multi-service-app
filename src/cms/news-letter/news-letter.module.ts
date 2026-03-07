import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsLetterService } from './news-letter.service';
import { NewsLetterController } from './news-letter.controller';

import { Newsfeed } from './entities/news-letter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsfeed])],
  controllers: [NewsLetterController],
  providers: [NewsLetterService],
  exports: [TypeOrmModule.forFeature([Newsfeed])],
})
export class NewsLetterModule {}
