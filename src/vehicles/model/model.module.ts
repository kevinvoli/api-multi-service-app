import { Module } from '@nestjs/common';
import { Model } from './entities/model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  controllers: [ModelController],
  providers: [ModelService],
  exports: [TypeOrmModule.forFeature([Model])],
})
export class ModelModule {}
