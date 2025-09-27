import { Module } from '@nestjs/common';
import { NewsLetterService } from './news-letter.service';
import { NewsLetterController } from './news-letter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsletter } from './entities/news-letter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter])],
  controllers: [NewsLetterController],
  providers: [NewsLetterService],
})
export class NewsLetterModule {}