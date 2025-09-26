import { Module } from '@nestjs/common';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';
import { RestrictedNegativeAreaController } from './restricted-negative-area.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestrictedNegativeArea } from './entities/restricted-negative-area.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RestrictedNegativeArea])],
  controllers: [RestrictedNegativeAreaController],
  providers: [RestrictedNegativeAreaService],
})
export class RestrictedNegativeAreaModule {}