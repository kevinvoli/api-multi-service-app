import { Module } from '@nestjs/common';
import { TripsModule } from './trips/trips.module';
import { TripCallMaskingModule } from './trip-call-masking/trip-call-masking.module';
import { TripDeliveryFieldsModule } from './trip-delivery-fields/trip-delivery-fields.module';
import { TripDestinationsModule } from './trip-destinations/trip-destinations.module';
import { TripHelpDetailModule } from './trip-help-detail/trip-help-detail.module';
import { TripMessagesModule } from './trip-messages/trip-messages.module';
import { TripOderDetailsModule } from './trip-order-details/trip-oder-details.module';
import { TripOutStandingAmountModule } from './trip-out-standing-amount/trip-out-standing-amount.module';
import { TripReasonModule } from './trip-reason/trip-reason.module';
import { TripTimesModule } from './trip-times/trip-times.module';
import { TripsDeliveryLocationsModule } from './trips-delivery-locations/trips-delivery-locations.module';
import { TripsLocationsModule } from './trips-locations/trips-locations.module';
import { TripsRouteLocationsModule } from './trips-route-locations/trips-route-locations.module';
import { TripsStatusMessagesModule } from './trips-status-messages/trips-status-messages.module';
import { TripsStopoverpointLocationModule } from './trips-stopoverpoint-location/trips-stopoverpoint-location.module';
import { AirportsurchargeFareModule } from './airportsurcharge-fare/airportsurcharge-fare.module';
import { CabBookingModule } from './cab-booking/cab-booking.module';
import { CabRequestNowModule } from './cab-request-now/cab-request-now.module';
import { DriverDestinationsModule } from './driver-destinations/driver-destinations.module';
import { DriverDestinationsRouteModule } from './driver-destinations-route/driver-destinations-route.module';
import { DriverLocationAirportModule } from './driver-location-airport/driver-location-airport.module';
import { FlyLocationWiseFareModule } from './fly-location-wise-fare/fly-location-wise-fare.module';
import { LocationWiseFareModule } from './location-wise-fare/location-wise-fare.module';
import { PassengerRequestsModule } from './passenger-requests/passenger-requests.module';
import { RentalPackageModule } from './rental-package/rental-package.module';
import { TempTripOrderDetailsModule } from './temp-trip-order-details/temp-trip-order-details.module';

@Module({
  imports: [
    TripsModule,
    TripCallMaskingModule,
    TripDeliveryFieldsModule,
    TripDestinationsModule,
    TripHelpDetailModule,
    TripMessagesModule,
    TripOderDetailsModule,
    TripOutStandingAmountModule,
    TripReasonModule,
    TripTimesModule,
    TripsDeliveryLocationsModule,
    TripsLocationsModule,
    TripsRouteLocationsModule,
    TripsStatusMessagesModule,
    TripsStopoverpointLocationModule,
    AirportsurchargeFareModule,
    CabBookingModule,
    CabRequestNowModule,
    DriverDestinationsModule,
    DriverDestinationsRouteModule,
    DriverLocationAirportModule,
    FlyLocationWiseFareModule,
    LocationWiseFareModule,
    PassengerRequestsModule,
    RentalPackageModule,
    TempTripOrderDetailsModule,
  ],
  exports: [
    TripsModule,
    TripCallMaskingModule,
    TripDeliveryFieldsModule,
    TripDestinationsModule,
    TripHelpDetailModule,
    TripMessagesModule,
    TripOderDetailsModule,
    TripOutStandingAmountModule,
    TripReasonModule,
    TripTimesModule,
    TripsDeliveryLocationsModule,
    TripsLocationsModule,
    TripsRouteLocationsModule,
    TripsStatusMessagesModule,
    TripsStopoverpointLocationModule,
    AirportsurchargeFareModule,
    CabBookingModule,
    CabRequestNowModule,
    DriverDestinationsModule,
    DriverDestinationsRouteModule,
    DriverLocationAirportModule,
    FlyLocationWiseFareModule,
    LocationWiseFareModule,
    PassengerRequestsModule,
    RentalPackageModule,
    TempTripOrderDetailsModule,
  ],
})
export class TransportModule {}