export class LoginDto {
  login: string;       // email ou numéro de téléphone
  password: string;
  userType: 'rider' | 'driver' | 'company' | 'hotel';
  countryCode?: string;
  compSystem?: string; // pour company : eSystem (Ride, DeliverAll, etc.)
}
