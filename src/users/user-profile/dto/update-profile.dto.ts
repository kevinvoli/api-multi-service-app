export class UpdateProfileDto {
  /** ID de l'utilisateur concerné */
  iUserId: number;
  /** Type : 'rider' | 'driver' | 'company' */
  userType: 'rider' | 'driver' | 'company';

  vName?: string;
  vLastName?: string;
  vEmail?: string;
  vPhone?: string;
  vPhoneCode?: string;
  vCountry?: string;
  vLang?: string;
  vCurrencyPassenger?: string;

  /** Mot de passe actuel (requis si changement de mot de passe) */
  currentPassword?: string;
  /** Nouveau mot de passe */
  newPassword?: string;
}
