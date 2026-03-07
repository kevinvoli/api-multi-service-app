import { Module } from '@nestjs/common';
import { FavoriteStore } from './entities/favorite-store.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteStoreService } from './favorite-store.service';
import { FavoriteStoreController } from './favorite-store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteStore])],
  controllers: [FavoriteStoreController],
  providers: [FavoriteStoreService],
  exports: [TypeOrmModule.forFeature([FavoriteStore])],
})
export class FavoriteStoreModule {}
