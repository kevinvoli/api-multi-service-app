import { Module } from '@nestjs/common';
import { Cuisine } from './entities/cuisine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuisineService } from './cuisine.service';
import { CuisineController } from './cuisine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cuisine])],
  controllers: [CuisineController],
  providers: [CuisineService],
  exports: [TypeOrmModule.forFeature([Cuisine])],
})
export class CuisineModule {}
