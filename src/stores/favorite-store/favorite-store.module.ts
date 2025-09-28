import { Module } from '@nestjs/common';
import { FavoriteStoreService } from './favorite-store.service';
import { FavoriteStoreController } from './favorite-store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteStore } from './entities/favorite-store.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteStore])],
  controllers: [FavoriteStoreController],
  providers: [FavoriteStoreService],
})
export class FavoriteStoreModule {}
