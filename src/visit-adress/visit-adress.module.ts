import { Module } from '@nestjs/common';
import { VisitAdressService } from './visit-adress.service';
import { VisitAdressController } from './visit-adress.controller';

@Module({
  controllers: [VisitAdressController],
  providers: [VisitAdressService],
})
export class VisitAdressModule {}
