import { Module } from '@nestjs/common';
import { CuisineModule } from './cuisine/cuisine.module';
import { FavoriteStoreModule } from './favorite-store/favorite-store.module';
import { HotelModule } from './hotel/hotel.module';
import { StoreCategoriesModule } from './store-categories/store-categories.module';
import { StoreCategoryTagsModule } from './store-category-tags/store-category-tags.module';
import { StoreFavoritesModule } from './store-favorites/store-favorites.module';

@Module({
  imports: [
    CuisineModule,
    FavoriteStoreModule,
    HotelModule,
    StoreCategoriesModule,
    StoreCategoryTagsModule,
    StoreFavoritesModule,
  ],
  exports: [
    CuisineModule,
    FavoriteStoreModule,
    HotelModule,
    StoreCategoriesModule,
    StoreCategoryTagsModule,
    StoreFavoritesModule,
  ],
})
export class StoresModule {}