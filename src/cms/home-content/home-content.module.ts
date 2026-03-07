import { Module } from '@nestjs/common';
import { HomeContent } from './entities/home-content.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeContentService } from './home-content.service';
import { HomeContentController } from './home-content.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HomeContent])],
  controllers: [HomeContentController],
  providers: [HomeContentService],
  exports: [TypeOrmModule.forFeature([HomeContent])],
})
export class HomeContentModule {}
