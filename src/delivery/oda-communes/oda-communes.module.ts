import { Module } from '@nestjs/common';
import { OdaCommunes } from './entities/oda-commune.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaCommunesService } from './oda-communes.service';
import { OdaCommunesController } from './oda-communes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaCommunes])],
  controllers: [OdaCommunesController],
  providers: [OdaCommunesService],
  exports: [TypeOrmModule.forFeature([OdaCommunes])],
})
export class OdaCommunesModule {}
