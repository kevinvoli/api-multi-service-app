import { Module } from '@nestjs/common';
import { NewsfeedService } from './newsfeed.service';
import { NewsfeedController } from './newsfeed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Newsfeed } from './entities/newsfeed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsfeed])],
  controllers: [NewsfeedController],
  providers: [NewsfeedService],
})
export class NewsfeedModule {}