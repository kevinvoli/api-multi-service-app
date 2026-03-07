import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantCartItem } from './entities/restaurant-cart-item.entity';
import { RestaurantOrder } from './entities/restaurant-order.entity';
import { OrderDetails } from '../orders/order-details/entities/order-detail.entity';
import { MenuItems } from '../delivery/menu-items/entities/menu-item.entity';
import { MenuitemOptions } from '../delivery/menu-item-options/entities/menu-item-option.entity';
import { Company } from '../users/company/entities/company.entity';
import { DeliveryCharges } from '../delivery/delivery-charges/entities/delivery-charge.entity';
import { Coupon } from '../payments/coupon/entities/coupon.entity';
import { UserAddress } from '../users/user-address/entities/user-address.entity';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { CheckoutCartDto } from './dto/checkout-cart.dto';

// ─── Haversine distance (en km) ──────────────────────────────────────────────
function haversineKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function generateOrderNo(): string {
  return String(Math.floor(Math.random() * 9000000000) + 1000000000);
}

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(RestaurantCartItem)
    private readonly cartRepo: Repository<RestaurantCartItem>,
    @InjectRepository(RestaurantOrder)
    private readonly orderRepo: Repository<RestaurantOrder>,
    @InjectRepository(OrderDetails)
    private readonly orderDetailRepo: Repository<OrderDetails>,
    @InjectRepository(MenuItems)
    private readonly menuItemRepo: Repository<MenuItems>,
    @InjectRepository(MenuitemOptions)
    private readonly optionRepo: Repository<MenuitemOptions>,
    @InjectRepository(Company)
    private readonly companyRepo: Repository<Company>,
    @InjectRepository(DeliveryCharges)
    private readonly deliveryChargeRepo: Repository<DeliveryCharges>,
    @InjectRepository(Coupon)
    private readonly couponRepo: Repository<Coupon>,
    @InjectRepository(UserAddress)
    private readonly addressRepo: Repository<UserAddress>,
  ) {}

  // ─── Ajouter / mettre à jour un article dans le panier ───────────────────
  // Remplace : add_cart_to_restaurant.php

  async addItem(dto: AddCartItemDto): Promise<{ items: RestaurantCartItem[]; totalQty: number }> {
    const vOptionId = (dto.vOptionId || '').replace(/^,|,$/g, '');
    const vAddonId = (dto.vAddonId || '').replace(/^,|,$/g, '');

    // Si le panier contient des articles d'un autre restaurant → vider
    const existing = await this.cartRepo.find({ where: { iUserId: dto.iUserId } as any });
    if (existing.length > 0 && existing[0].iCompanyId !== dto.iCompanyId) {
      await this.cartRepo.delete({ iUserId: dto.iUserId } as any);
    }

    // Chercher un article identique (même item + options + addons)
    const match = await this.cartRepo.findOne({
      where: {
        iUserId: dto.iUserId,
        iMenuItemId: dto.iMenuItemId,
        iFoodMenuId: dto.iFoodMenuId,
        vOptionId,
        vAddonId,
      } as any,
    });

    if (match) {
      match.iQty += dto.iQty;
      await this.cartRepo.save(match);
    } else {
      const item = this.cartRepo.create({
        iUserId: dto.iUserId,
        iCompanyId: dto.iCompanyId,
        iMenuItemId: dto.iMenuItemId,
        iFoodMenuId: dto.iFoodMenuId,
        vOptionId,
        vAddonId,
        iQty: dto.iQty,
        tInstruction: dto.tInstruction || '',
        eFoodType: dto.eFoodType || '',
      } as any);
      await this.cartRepo.save(item);
    }

    const items = await this.cartRepo.find({ where: { iUserId: dto.iUserId } as any });
    const totalQty = items.reduce((s, i) => s + i.iQty, 0);
    return { items, totalQty };
  }

  // ─── Supprimer un article du panier ──────────────────────────────────────

  async removeItem(userId: number, cartItemId: number): Promise<void> {
    await this.cartRepo.delete({ id: cartItemId, iUserId: userId } as any);
  }

  // ─── Vider le panier d'un utilisateur ────────────────────────────────────

  async clearCart(userId: number): Promise<void> {
    await this.cartRepo.delete({ iUserId: userId } as any);
  }

  // ─── Calculer les totaux et afficher le panier ───────────────────────────
  // Remplace : ajax_view_cart_to_restaurant.php + ajax_checkout_cart_to_restaurant.php

  async getCart(userId: number, addressId?: number): Promise<Record<string, any>> {
    const items = await this.cartRepo.find({ where: { iUserId: userId } as any });
    if (items.length === 0) {
      return { items: [], totalQty: 0, fSubTotal: 0, fDeliveryCharge: 0, fPackingCharge: 0, fTax: 0, fNetTotal: 0 };
    }

    const companyId = items[0].iCompanyId;
    const company = await this.companyRepo.findOneBy({ iCompanyId: companyId } as any);
    if (!company) throw new NotFoundException(`Restaurant #${companyId} introuvable`);

    // Récupérer les prix des articles
    const menuItemIds = [...new Set(items.map(i => i.iMenuItemId))];
    const menuItems = await this.menuItemRepo
      .createQueryBuilder('m')
      .whereInIds(menuItemIds)
      .getMany();
    const menuItemMap = new Map(menuItems.map(m => [m.iMenuItemId, m]));

    // Récupérer les prix des options/addons
    const allOptionAddonIds = items.flatMap(i =>
      [...(i.vOptionId || '').split(','), ...(i.vAddonId || '').split(',')]
        .filter(Boolean)
        .map(Number),
    );
    let optionMap = new Map<number, MenuitemOptions>();
    if (allOptionAddonIds.length > 0) {
      const options = await this.optionRepo
        .createQueryBuilder('o')
        .whereInIds([...new Set(allOptionAddonIds)])
        .getMany();
      optionMap = new Map(options.map(o => [o.iOptionId, o]));
    }

    let fSubTotal = 0;
    let fTotalDiscount = 0;
    const cartLines: any[] = [];

    const fOfferType = company.fOfferType;
    const fOfferAppyType = company.fOfferAppyType;
    const fOfferAmt = company.fOfferAmt;
    const fMaxOfferAmt = company.fMaxOfferAmt;
    const fTargetAmt = company.fTargetAmt;

    for (const item of items) {
      const menuItem = menuItemMap.get(item.iMenuItemId);
      if (!menuItem) continue;

      const basePrice = menuItem.fPrice;
      const itemOfferAmt = menuItem.fOfferAmt || 0;

      // Prix des options
      let optionExtraPrice = 0;
      for (const optId of (item.vOptionId || '').split(',').filter(Boolean)) {
        const opt = optionMap.get(Number(optId));
        if (opt) optionExtraPrice += opt.fPrice;
      }

      // Prix des addons
      let addonExtraPrice = 0;
      for (const addonId of (item.vAddonId || '').split(',').filter(Boolean)) {
        const addon = optionMap.get(Number(addonId));
        if (addon) addonExtraPrice += addon.fPrice;
      }

      const unitOriginalPrice = basePrice + optionExtraPrice + addonExtraPrice;
      const unitDiscountPrice = itemOfferAmt;
      const totalOriginal = round2(unitOriginalPrice * item.iQty);
      let totalDiscount = round2(unitDiscountPrice * item.iQty);

      if (fMaxOfferAmt > 0 && totalDiscount > fMaxOfferAmt) {
        totalDiscount = fMaxOfferAmt;
      }

      // Remise globale du restaurant (Flat ou Percentage)
      let lineDiscount = 0;
      if (fOfferAppyType !== 'None') {
        if (fOfferType === 'Percentage') {
          lineDiscount = round2((totalOriginal * fOfferAmt) / 100);
          if (fMaxOfferAmt > 0 && lineDiscount > fMaxOfferAmt) lineDiscount = fMaxOfferAmt;
        } else if (fOfferType === 'Flat') {
          lineDiscount = totalDiscount;
        }
      }

      fSubTotal += totalOriginal;
      fTotalDiscount += lineDiscount;

      cartLines.push({
        cartItemId: item.id,
        iMenuItemId: item.iMenuItemId,
        iFoodMenuId: item.iFoodMenuId,
        vItemName: menuItem.vItemTypeEn,
        iQty: item.iQty,
        fUnitPrice: round2(unitOriginalPrice),
        fTotalPrice: totalOriginal,
        fDiscount: lineDiscount,
        vOptionId: item.vOptionId,
        vAddonId: item.vAddonId,
        tInstruction: item.tInstruction,
      });
    }

    // Frais de livraison
    let fDeliveryCharge = 0;
    if (addressId) {
      fDeliveryCharge = await this._computeDeliveryCharge(company, addressId, fSubTotal);
    }

    // Frais d'emballage
    const fPackingCharge = round2(company.fPackingCharge || 0);

    // Taxe restaurant
    let fTax = 0;
    const taxRate = parseFloat(company.fTax as any) || 0;
    if (taxRate > 0) {
      const taxBase = fSubTotal - fTotalDiscount + fPackingCharge;
      fTax = round2((taxBase * taxRate) / 100);
    }

    const fNetTotal = round2(fSubTotal + fPackingCharge + fDeliveryCharge + fTax - fTotalDiscount);

    return {
      iCompanyId: companyId,
      vCompany: company.vName,
      items: cartLines,
      totalQty: items.reduce((s, i) => s + i.iQty, 0),
      fSubTotal: round2(fSubTotal),
      fTotalDiscount: round2(fTotalDiscount),
      fPackingCharge,
      fDeliveryCharge,
      fTax,
      fNetTotal: Math.max(0, fNetTotal),
      fMinOrderValue: company.fMinOrderValue || 0,
      isMinOrderMet: fSubTotal >= (company.fMinOrderValue || 0),
    };
  }

  // ─── Appliquer / valider un code promo ───────────────────────────────────
  // Remplace : ajax_check_promocode_cart_to_restaurant.php

  async applyPromoCode(
    userId: number,
    couponCode: string,
    fNetTotal: number,
    fDeliveryCharge: number,
    iCompanyId?: number,
  ): Promise<{ valid: boolean; message?: string; fDiscount?: number; fNewTotal?: number; fFreeDelivery?: boolean }> {
    const coupon = await this.couponRepo
      .createQueryBuilder('c')
      .where('c.vCouponCode = :code', { code: couponCode })
      .andWhere("c.eSystemType IN ('DeliverAll', 'General')")
      .andWhere("c.eStatus = 'Active'")
      .getOne();

    if (!coupon) {
      return { valid: false, message: 'Code promo invalide ou expiré' };
    }

    // Validité temporelle
    if (coupon.eValidityType === 'Defined') {
      const now = new Date().toISOString().split('T')[0];
      if (now < coupon.dActiveDate || now > coupon.dExpiryDate) {
        return { valid: false, message: 'Code promo expiré' };
      }
    }

    // Limite d'utilisation
    if (coupon.iUsageLimit > 0 && coupon.iUsed >= coupon.iUsageLimit) {
      return { valid: false, message: 'Code promo épuisé' };
    }

    // Restriction par restaurant
    if (coupon.eStoreType === 'StoreSpecific' && iCompanyId && coupon.iCompanyId !== iCompanyId) {
      return { valid: false, message: 'Code promo non valide pour ce restaurant' };
    }

    let fDiscount = 0;
    let fFreeDelivery = coupon.eFreeDelivery === 'Yes';

    if (coupon.eType === 'percentage') {
      const base = fNetTotal - fDeliveryCharge;
      fDiscount = round2((base * coupon.fDiscount) / 100);
    } else {
      fDiscount = coupon.fDiscount > fNetTotal ? fNetTotal : coupon.fDiscount;
    }

    let fNewTotal = fNetTotal - fDiscount;
    if (fFreeDelivery) {
      fNewTotal -= fDeliveryCharge;
    }

    return {
      valid: true,
      fDiscount: round2(fDiscount),
      fNewTotal: round2(Math.max(0, fNewTotal)),
      fFreeDelivery,
    };
  }

  // ─── Finaliser la commande (checkout) ────────────────────────────────────
  // Remplace : ajax_checkout_order_details.php

  async checkout(dto: CheckoutCartDto): Promise<Record<string, any>> {
    const items = await this.cartRepo.find({ where: { iUserId: dto.iUserId } as any });
    if (items.length === 0) {
      throw new BadRequestException('Le panier est vide');
    }

    const companyId = items[0].iCompanyId;
    const company = await this.companyRepo.findOneBy({ iCompanyId: companyId } as any);
    if (!company) throw new NotFoundException(`Restaurant #${companyId} introuvable`);

    // Adresse de livraison
    const address = await this.addressRepo.findOneBy({ iUserAddressId: dto.iUserAddressId } as any);

    // Calcul des totaux (même logique que getCart)
    const cartData = await this.getCart(dto.iUserId, dto.iUserAddressId);
    let fSubTotal = cartData.fSubTotal as number;
    let fTotalDiscount = cartData.fTotalDiscount as number;
    let fDeliveryCharge = cartData.fDeliveryCharge as number;
    const fPackingCharge = cartData.fPackingCharge as number;
    const fTax = cartData.fTax as number;
    let fNetTotal = cartData.fNetTotal as number;

    // Frais de livraison annulés si takeaway
    if (dto.eTakeAway === 'Yes') {
      fNetTotal = fNetTotal - fDeliveryCharge;
      fDeliveryCharge = 0;
    }

    // Application du code promo
    let fPromoDiscount = 0;
    let vCouponCode = dto.vCouponCode || '';
    if (vCouponCode) {
      const promoResult = await this.applyPromoCode(
        dto.iUserId, vCouponCode, fNetTotal, fDeliveryCharge, companyId,
      );
      if (promoResult.valid) {
        fPromoDiscount = promoResult.fDiscount || 0;
        if (promoResult.fFreeDelivery) fDeliveryCharge = 0;
        fNetTotal = promoResult.fNewTotal || 0;
      } else {
        vCouponCode = '';
      }
    }

    // Pourboire
    const fTipAmount = round2(dto.fTipAmount || 0);
    fNetTotal = round2(fNetTotal + fTipAmount);

    if (fNetTotal < 0) fNetTotal = 0;

    // ── Créer l'entête de commande ──────────────────────────────────────────
    const now = new Date();
    const order = (this.orderRepo.create as any)({
      iUserId: dto.iUserId,
      iCompanyId: companyId,
      iUserAddressId: dto.iUserAddressId,
      vOrderNo: generateOrderNo(),
      tOrderRequestDate: now,
      dDeliveryDate: now,
      dDate: now,
      vCouponCode,
      ePaymentOption: dto.ePaymentOption || 'Cash',
      iStatusCode: 1,
      vInstruction: dto.vInstruction || '',
      vTimeZone: address?.vTimeZone || 'UTC',
      fMaxOfferAmt: company.fMaxOfferAmt,
      fTargetAmt: company.fTargetAmt,
      fOfferType: company.fOfferType,
      fOfferAppyType: company.fOfferAppyType,
      fOfferAmt: company.fOfferAmt,
      iServiceId: dto.iServiceId || 1,
      eCheckUserWallet: dto.eCheckUserWallet || 'No',
      ePayWallet: dto.eCheckUserWallet || 'No',
      eOrderplacedBy: dto.eOrderplacedBy || 'User',
      fFinalTotal: fSubTotal,
      fTotalDiscount,
      fDeliveryCharge,
      fPackingCharge,
      fTax,
      fNetTotal,
      fPromoDiscount,
      fTipAmount,
      eTakeAway: dto.eTakeAway || 'No',
    }) as RestaurantOrder;

    const savedOrder = await this.orderRepo.save(order) as any;
    const iOrderId = savedOrder.iOrderId;

    // ── Insérer les lignes de détail ────────────────────────────────────────
    const menuItemIds = [...new Set(items.map(i => i.iMenuItemId))];
    const menuItems = await this.menuItemRepo
      .createQueryBuilder('m')
      .whereInIds(menuItemIds)
      .getMany();
    const menuItemMap = new Map(menuItems.map(m => [m.iMenuItemId, m]));

    const allOptionAddonIds = items.flatMap(i =>
      [...(i.vOptionId || '').split(','), ...(i.vAddonId || '').split(',')]
        .filter(Boolean)
        .map(Number),
    );
    let optionMap = new Map<number, MenuitemOptions>();
    if (allOptionAddonIds.length > 0) {
      const options = await this.optionRepo
        .createQueryBuilder('o')
        .whereInIds([...new Set(allOptionAddonIds)])
        .getMany();
      optionMap = new Map(options.map(o => [o.iOptionId, o]));
    }

    for (const item of items) {
      const menuItem = menuItemMap.get(item.iMenuItemId);
      if (!menuItem) continue;

      const optionIds = (item.vOptionId || '').split(',').filter(Boolean);
      const addonIds = (item.vAddonId || '').split(',').filter(Boolean);

      const vOptionPrices = optionIds.map(id => optionMap.get(Number(id))?.fPrice ?? 0).join(',');
      const vAddonPrices = addonIds.map(id => optionMap.get(Number(id))?.fPrice ?? 0).join(',');

      let optionTotal = optionIds.reduce((s, id) => s + (optionMap.get(Number(id))?.fPrice ?? 0), 0);
      let addonTotal = addonIds.reduce((s, id) => s + (optionMap.get(Number(id))?.fPrice ?? 0), 0);

      const fOriginalPrice = round2((menuItem.fPrice + optionTotal + addonTotal) * item.iQty);
      const fDiscountPrice = round2(menuItem.fOfferAmt * item.iQty);
      const fPrice = fOriginalPrice;
      const fSubTotalLine = fOriginalPrice;

      const detail = this.orderDetailRepo.create({
        iOrderId,
        iFoodMenuId: item.iFoodMenuId,
        iMenuItemId: item.iMenuItemId,
        fOriginalPrice,
        fDiscountPrice,
        fPrice,
        vOptionId: item.vOptionId || '',
        vOptionPrice: vOptionPrices,
        vAddonId: item.vAddonId || '',
        vAddonPrice: vAddonPrices,
        fSubTotal: fSubTotalLine,
        iQty: item.iQty,
        fTotalDiscountPrice: fDiscountPrice,
        fTotalPrice: fOriginalPrice,
        dDate: now.toISOString().split('T')[0],
        eAvailable: 'Yes',
        tOptionAddonAttribute: '',
        tOptionIdOrigPrice: optionIds.map(id => optionMap.get(Number(id))?.fPrice ?? 0).join(','),
        tAddOnIdOrigPrice: addonIds.map(id => optionMap.get(Number(id))?.fPrice ?? 0).join(','),
        tInstruction: item.tInstruction || '',
        eExtraPayment: 'Yes',
      } as any);

      await this.orderDetailRepo.save(detail);
    }

    // ── Vider le panier ─────────────────────────────────────────────────────
    await this.clearCart(dto.iUserId);

    // Incrémenter l'usage du coupon
    if (vCouponCode) {
      await this.couponRepo
        .createQueryBuilder()
        .update()
        .set({ iUsed: () => 'iUsed + 1' } as any)
        .where('vCouponCode = :code', { code: vCouponCode })
        .execute();
    }

    return {
      Action: '1',
      iOrderId,
      vOrderNo: savedOrder.vOrderNo,
      fSubTotal,
      fTotalDiscount,
      fDeliveryCharge,
      fPackingCharge,
      fTax,
      fPromoDiscount,
      fTipAmount,
      fNetTotal,
    };
  }

  // ─── Calcul frais de livraison ────────────────────────────────────────────

  private async _computeDeliveryCharge(
    company: Company,
    iUserAddressId: number,
    fSubTotal: number,
  ): Promise<number> {
    const address = await this.addressRepo.findOneBy({ iUserAddressId } as any);
    if (!address) return 0;

    const restaurantLat = parseFloat(company.vRestuarantLocationLat) || 0;
    const restaurantLon = parseFloat(company.vRestuarantLocationLong) || 0;
    const deliveryLat = parseFloat(address.vLatitude) || 0;
    const deliveryLon = parseFloat(address.vLongitude) || 0;

    const distanceKm = haversineKm(restaurantLat, restaurantLon, deliveryLat, deliveryLon);

    // Chercher les frais de livraison par distance
    const charges = await this.deliveryChargeRepo
      .createQueryBuilder('dc')
      .where("dc.eStatus = 'Active'")
      .orderBy('dc.iDeliveyChargeId', 'DESC')
      .getMany();

    let fDeliveryCharge = 0;
    let fFreeDeliveryRadius = 0;
    let fFreeOrderPriceSubtotal = 0;

    if (charges.length > 0) {
      const dc = charges[0];
      fFreeDeliveryRadius = dc.iFreeDeliveryRadius;
      fFreeOrderPriceSubtotal = dc.fFreeOrderPriceSubtotal;

      if (fSubTotal >= dc.fOrderPriceValue) {
        fDeliveryCharge = dc.fDeliveryChargeAbove;
      } else {
        fDeliveryCharge = dc.fDeliveryChargeBelow;
      }

      // Livraison gratuite si dans le rayon
      if (fFreeDeliveryRadius > 0 && distanceKm < fFreeDeliveryRadius) {
        fDeliveryCharge = 0;
      }

      // Livraison gratuite si subtotal dépasse le seuil
      if (fFreeOrderPriceSubtotal > 0 && fSubTotal > fFreeOrderPriceSubtotal) {
        fDeliveryCharge = 0;
      }
    }

    return round2(fDeliveryCharge);
  }
}
