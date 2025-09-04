import { Module } from '@nestjs/common';
import { OdaCommunesService } from './oda-communes.service';
import { OdaCommunesController } from './oda-communes.controller';

@Module({
  controllers: [OdaCommunesController],
  providers: [OdaCommunesService],
})
export class OdaCommunesModule {}
