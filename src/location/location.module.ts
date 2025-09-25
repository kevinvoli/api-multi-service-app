import { Module } from '@nestjs/common';
import { AirportLocationMastersModule } from './airport-location-masters/airport-location-masters.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { LocationMasterModule } from './location-master/location-master.module';
import { RestrictedNegativeAreaModule } from './restricted-negative-area/restricted-negative-area.module';
import { StateModule } from './state/state.module';
import { VisitAdressModule } from './visit-adress/visit-adress.module';

@Module({
  imports: [
    AirportLocationMastersModule,
    CityModule,
    CountryModule,
    LocationMasterModule,
    RestrictedNegativeAreaModule,
    StateModule,
    VisitAdressModule,
  ],
  exports: [
    AirportLocationMastersModule,
    CityModule,
    CountryModule,
    LocationMasterModule,
    RestrictedNegativeAreaModule,
    StateModule,
    VisitAdressModule,
  ],
})
export class LocationModule {}