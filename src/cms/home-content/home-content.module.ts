import { Module } from '@nestjs/common';
import { HomeContentService } from './home-content.service';
import { HomeContentController } from './home-content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeContent } from './entities/home-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HomeContent])],
  controllers: [HomeContentController],
  providers: [HomeContentService],
})
export class HomeContentModule {}