import { Module } from '@nestjs/common';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';
import { RestrictedNegativeAreaController } from './restricted-negative-area.controller';

@Module({
  controllers: [RestrictedNegativeAreaController],
  providers: [RestrictedNegativeAreaService],
})
export class RestrictedNegativeAreaModule {}
