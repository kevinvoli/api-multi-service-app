import { Module } from '@nestjs/common';
import { RelatedCommunesService } from './related-communes.service';
import { RelatedCommunesController } from './related-communes.controller';

@Module({
  controllers: [RelatedCommunesController],
  providers: [RelatedCommunesService],
})
export class RelatedCommunesModule {}
