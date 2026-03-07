import { Module } from '@nestjs/common';
import { Pages } from './entities/page.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pages])],
  controllers: [PagesController],
  providers: [PagesService],
  exports: [TypeOrmModule.forFeature([Pages])],
})
export class PagesModule {}
