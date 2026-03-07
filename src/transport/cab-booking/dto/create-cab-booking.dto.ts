export class CreateCabBookingDto {
  // Passager (existant ou nouveau)
  iUserId?: number;
  vName?: string;
  vLastName?: string;
  vEmail?: string;
  vPhone?: string;
  vPhoneCode?: string;
  vCountry?: string;

  // Trajet
  vSourceLatitude: string;
  vSourceLongitude: string;
  vDestLatitude: string;
  vDestLongitude: string;
  vSourceAddresss: string;
  tDestAddress: string;
  vDistance?: number;
  vDuration?: number;

  // Réservation
  iDriverId?: number;
  iVehicleTypeId: number;
  iCompanyId?: number;
  dBookingDate?: string;
  eAutoAssign?: 'Yes' | 'No';
  eBookingFrom?: string;
  eFemaleDriverRequest?: 'Yes' | 'No';
  eHandiCapAccessibility?: 'Yes' | 'No';
  eType?: 'Ride' | 'Deliver' | 'UberX' | 'Multi-Delivery';
}
