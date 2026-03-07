import { Module } from '@nestjs/common';
import { RelatedCommunes } from './entities/related-commune.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatedCommunesService } from './related-communes.service';
import { RelatedCommunesController } from './related-communes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RelatedCommunes])],
  controllers: [RelatedCommunesController],
  providers: [RelatedCommunesService],
  exports: [TypeOrmModule.forFeature([RelatedCommunes])],
})
export class RelatedCommunesModule {}
