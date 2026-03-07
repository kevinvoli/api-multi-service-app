import { Module } from '@nestjs/common';
import { MasterLngPages } from './entities/master-lng-page.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MasterLngPagesService } from './master-lng-pages.service';
import { MasterLngPagesController } from './master-lng-pages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MasterLngPages])],
  controllers: [MasterLngPagesController],
  providers: [MasterLngPagesService],
  exports: [TypeOrmModule.forFeature([MasterLngPages])],
})
export class MasterLngPagesModule {}
