import { Module } from '@nestjs/common';
import { OdaCommunesService } from './oda-communes.service';
import { OdaCommunesController } from './oda-communes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaCommunes } from './entities/oda-commune.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaCommunes])],
  controllers: [OdaCommunesController],
  providers: [OdaCommunesService],
})
export class OdaCommunesModule {}
