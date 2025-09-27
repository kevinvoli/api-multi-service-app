import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pages } from './entities/page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pages])],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}