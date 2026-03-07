export class EstimateFareDto {
  vehicleTypeId: number;
  distanceKm: number;         // distance en km (calculée côté client ou via Google Maps)
  durationMin: number;        // durée en minutes
  eType?: 'Ride' | 'Deliver' | 'UberX' | 'DeliverAll';
  bookingDate?: string;       // ISO datetime, défaut = maintenant
  promoCode?: string;
  iUserId?: number;
}
