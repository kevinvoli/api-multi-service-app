import { Module } from '@nestjs/common';
import { RelatedCommunesService } from './related-communes.service';
import { RelatedCommunesController } from './related-communes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelatedCommunes } from './entities/related-commune.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RelatedCommunes])],
  controllers: [RelatedCommunesController],
  providers: [RelatedCommunesService],
})
export class RelatedCommunesModule {}
