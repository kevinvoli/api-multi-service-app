import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Mappe la table `orders` de l'application PHP legacy.
 * Utilisée pour la création de commandes restaurant.
 */
@Entity('orders', { schema: 'amygo1' })
export class RestaurantOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'iOrderId' })
  iOrderId: number;

  @Column({ type: 'int', name: 'iUserId', default: 0 })
  iUserId: number;

  @Column({ type: 'int', name: 'iCompanyId', default: 0 })
  iCompanyId: number;

  @Column({ type: 'int', name: 'iUserAddressId', default: 0 })
  iUserAddressId: number;

  @Column({ type: 'varchar', name: 'vOrderNo', length: 50, default: '' })
  vOrderNo: string;

  @Column({ type: 'datetime', name: 'tOrderRequestDate', nullable: true })
  tOrderRequestDate: Date;

  @Column({ type: 'datetime', name: 'dDeliveryDate', nullable: true })
  dDeliveryDate: Date;

  @Column({ type: 'datetime', name: 'dDate', nullable: true })
  dDate: Date;

  @Column({ type: 'varchar', name: 'vUserEmail', length: 100, default: '' })
  vUserEmail: string;

  @Column({ type: 'varchar', name: 'vName', length: 100, default: '' })
  vName: string;

  @Column({ type: 'varchar', name: 'vLastName', length: 100, default: '' })
  vLastName: string;

  @Column({ type: 'varchar', name: 'vCompany', length: 100, default: '' })
  vCompany: string;

  @Column({ type: 'varchar', name: 'vCouponCode', length: 50, default: '' })
  vCouponCode: string;

  @Column({ type: 'varchar', name: 'ePaymentOption', length: 20, default: 'Cash' })
  ePaymentOption: string;

  @Column({ type: 'int', name: 'iStatusCode', default: 1 })
  iStatusCode: number;

  @Column({ type: 'text', name: 'vInstruction', nullable: true })
  vInstruction: string;

  @Column({ type: 'varchar', name: 'vTimeZone', length: 100, default: '' })
  vTimeZone: string;

  @Column({ type: 'float', name: 'fMaxOfferAmt', precision: 10, default: 0 })
  fMaxOfferAmt: number;

  @Column({ type: 'float', name: 'fTargetAmt', precision: 10, default: 0 })
  fTargetAmt: number;

  @Column({ type: 'varchar', name: 'fOfferType', length: 20, default: '' })
  fOfferType: string;

  @Column({ type: 'varchar', name: 'fOfferAppyType', length: 20, default: 'None' })
  fOfferAppyType: string;

  @Column({ type: 'float', name: 'fOfferAmt', precision: 10, default: 0 })
  fOfferAmt: number;

  @Column({ type: 'int', name: 'iServiceId', default: 1 })
  iServiceId: number;

  @Column({ type: 'varchar', name: 'eCheckUserWallet', length: 5, default: 'No' })
  eCheckUserWallet: string;

  @Column({ type: 'varchar', name: 'ePayWallet', length: 5, default: 'No' })
  ePayWallet: string;

  @Column({ type: 'text', name: 'tUserWalletBalance', nullable: true })
  tUserWalletBalance: string;

  @Column({ type: 'varchar', name: 'eOrderplaced_by', length: 20, default: 'User' })
  eOrderplacedBy: string;

  @Column({ type: 'int', name: 'iAdminUserId_placedorder', default: 0 })
  iAdminUserIdPlacedorder: number;

  // Totaux calculés (mis à jour après insertion des détails)
  @Column({ type: 'float', name: 'fFinalTotal', precision: 10, default: 0 })
  fFinalTotal: number;

  @Column({ type: 'float', name: 'fTotalDiscount', precision: 10, default: 0 })
  fTotalDiscount: number;

  @Column({ type: 'float', name: 'fDeliveryCharge', precision: 10, default: 0 })
  fDeliveryCharge: number;

  @Column({ type: 'float', name: 'fPackingCharge', precision: 10, default: 0 })
  fPackingCharge: number;

  @Column({ type: 'float', name: 'fTax', precision: 10, default: 0 })
  fTax: number;

  @Column({ type: 'float', name: 'fNetTotal', precision: 10, default: 0 })
  fNetTotal: number;

  @Column({ type: 'float', name: 'fPromoDiscount', precision: 10, default: 0 })
  fPromoDiscount: number;

  @Column({ type: 'float', name: 'fWalletDebit', precision: 10, default: 0 })
  fWalletDebit: number;

  @Column({ type: 'float', name: 'fTipAmount', precision: 10, default: 0 })
  fTipAmount: number;

  @Column({ type: 'varchar', name: 'eTakeAway', length: 5, default: 'No' })
  eTakeAway: string;
}
