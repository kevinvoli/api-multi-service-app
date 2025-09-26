import { Module } from '@nestjs/common';
import { VisitAdressService } from './visit-adress.service';
import { VisitAdressController } from './visit-adress.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitAddress } from './entities/visit-adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VisitAddress])],
  controllers: [VisitAdressController],
  providers: [VisitAdressService],
})
export class VisitAdressModule {}