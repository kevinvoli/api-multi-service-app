import { Module } from '@nestjs/common';
import { CustomDeliveryChargesOrderModule } from './custom-delivery-charges-order/custom-delivery-charges-order.module';
import { DeliveryChargesModule } from './delivery-charges/delivery-charges.module';
import { DeliveryFildsModule } from './delivery-fields/delivery-filds.module';
import { DeliveryPreferencesModule } from './delivery-preferences/delivery-preferences.module';
import { FoodMenuModule } from './food-menu/food-menu.module';
import { FoodMenuImagesModule } from './food-menu-images/food-menu-images.module';
import { MenuItemMediaModule } from './menu-item-media/menu-item-media.module';
import { MenuItemOptionsModule } from './menu-item-options/menu-item-options.module';
import { MenuItemOptionsCategoryModule } from './menu-item-options-category/menu-item-options-category.module';
import { MenuItemsModule } from './menu-items/menu-items.module';
import { OdaAreasLocationModule } from './oda-areas-location/oda-areas-location.module';
import { OdaCommoditiesLocationModule } from './oda-commodities-location/oda-commodities-location.module';
import { OdaCommunesModule } from './oda-communes/oda-communes.module';
import { OdaItemsTypesLocationModule } from './oda-items-types-location/oda-items-types-location.module';
import { OdaLocationsOrdersUnavailabilitiesModule } from './oda-locations-orders-unavailabilities/oda-locations-orders-unavailabilities.module';
import { OdaLocationsStatusModule } from './oda-locations-status/oda-locations-status.module';
import { OdaSousItemsTypesLocationModule } from './oda-sous-items-types-location/oda-sous-items-types-location.module';
import { OdaSousServicesLocationModule } from './oda-sous-services-location/oda-sous-services-location.module';
import { OrderDeliveryChargeDetailsModule } from './order-delivery-charge-details/order-delivery-charge-details.module';
import { PackageTypeModule } from './package-type/package-type.module';
import { PrescriptionImagesModule } from './prescription-images/prescription-images.module';
import { RelatedCommunesModule } from './related-communes/related-communes.module';

@Module({
  imports: [
    CustomDeliveryChargesOrderModule,
    DeliveryChargesModule,
    DeliveryFildsModule,
    DeliveryPreferencesModule,
    FoodMenuModule,
    FoodMenuImagesModule,
    MenuItemMediaModule,
    MenuItemOptionsModule,
    MenuItemOptionsCategoryModule,
    MenuItemsModule,
    OdaAreasLocationModule,
    OdaCommoditiesLocationModule,
    OdaCommunesModule,
    OdaItemsTypesLocationModule,
    OdaLocationsOrdersUnavailabilitiesModule,
    OdaLocationsStatusModule,
    OdaSousItemsTypesLocationModule,
    OdaSousServicesLocationModule,
    OrderDeliveryChargeDetailsModule,
    PackageTypeModule,
    PrescriptionImagesModule,
    RelatedCommunesModule,
  ],
  exports: [
    CustomDeliveryChargesOrderModule,
    DeliveryChargesModule,
    DeliveryFildsModule,
    DeliveryPreferencesModule,
    FoodMenuModule,
    FoodMenuImagesModule,
    MenuItemMediaModule,
    MenuItemOptionsModule,
    MenuItemOptionsCategoryModule,
    MenuItemsModule,
    OdaAreasLocationModule,
    OdaCommoditiesLocationModule,
    OdaCommunesModule,
    OdaItemsTypesLocationModule,
    OdaLocationsOrdersUnavailabilitiesModule,
    OdaLocationsStatusModule,
    OdaSousItemsTypesLocationModule,
    OdaSousServicesLocationModule,
    OrderDeliveryChargeDetailsModule,
    PackageTypeModule,
    PrescriptionImagesModule,
    RelatedCommunesModule,
  ],
})
export class DeliveryModule {}