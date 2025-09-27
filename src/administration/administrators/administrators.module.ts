import { Module } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { AdministratorsController } from './administrators.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrators } from './entities/administrator.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Administrators])],
  controllers: [AdministratorsController],
  providers: [AdministratorsService],
})
export class AdministratorsModule {}