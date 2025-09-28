import { Module } from '@nestjs/common';
import { MasterLngPagesService } from './master-lng-pages.service';
import { MasterLngPagesController } from './master-lng-pages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterLngPages } from './entities/master-lng-page.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MasterLngPages])],
  controllers: [MasterLngPagesController],
  providers: [MasterLngPagesService],
})
export class MasterLngPagesModule {}
