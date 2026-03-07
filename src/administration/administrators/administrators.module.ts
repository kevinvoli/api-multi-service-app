import { Module } from '@nestjs/common';
import { Administrators } from './entities/administrator.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Administrators])],
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
  exports: [TypeOrmModule.forFeature([Administrators])],
})
export class AdministratorsModule {}
