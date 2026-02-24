import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuisineModule } from './cuisine/cuisine.module';
import { FavoriteStoreModule } from './favorite-store/favorite-store.module';
import { HotelModule } from './hotel/hotel.module';
import { StoreCategoriesModule } from './store-categories/store-categories.module';
import { StoreCategoryTagsModule } from './store-category-tags/store-category-tags.module';
import { StoreFavoritesModule } from './store-favorites/store-favorites.module';
import { Store } from './entities/store.entity'; // Import the Store entity
import { StoreCategory } from './entities/store-category.entity'; // Import the StoreCategory entity
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Store, StoreCategory]), // Add Store and StoreCategory entities here
    CuisineModule,
    FavoriteStoreModule,
    HotelModule,
    StoreCategoriesModule,
    StoreCategoryTagsModule,
    StoreFavoritesModule,
  ],
  controllers: [StoresController],
  providers: [StoresService],
  exports: [
    TypeOrmModule.forFeature([Store, StoreCategory]), // Export for other modules if needed
    StoresService,
    CuisineModule,
    FavoriteStoreModule,
    HotelModule,
    StoreCategoriesModule,
    StoreCategoryTagsModule,
    StoreFavoritesModule,
  ],
})
export class StoresModule {}