import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsfeedService } from './newsfeed.service';
import { NewsfeedController } from './newsfeed.controller';

import { Newsletter } from './entities/newsfeed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Newsletter])],
  controllers: [NewsfeedController],
  providers: [NewsfeedService],
  exports: [TypeOrmModule.forFeature([Newsletter])],
})
export class NewsfeedModule {}
