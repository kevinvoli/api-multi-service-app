export class CheckoutCartDto {
  iUserId: number;
  iUserAddressId: number;
  ePaymentOption?: string;   // 'Cash' | 'Card' | 'Wallet', défaut: 'Cash'
  vCouponCode?: string;
  vInstruction?: string;
  eTakeAway?: string;        // 'Yes' | 'No', défaut: 'No'
  eCheckUserWallet?: string; // 'Yes' | 'No'
  fTipAmount?: number;
  iServiceId?: number;       // défaut: 1
  eOrderplacedBy?: string;   // 'User' | 'Admin' | 'Store', défaut: 'User'
  /** Latitude de livraison (pour calcul frais de livraison) */
  vDeliveryLat?: string;
  /** Longitude de livraison */
  vDeliveryLon?: string;
}
