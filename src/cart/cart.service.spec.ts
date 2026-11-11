import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CartService } from './cart.service';
import { CheckoutCartDto } from './dto/checkout-cart.dto';
import { RestaurantCartItem } from './entities/restaurant-cart-item.entity';
import { RestaurantOrder } from './entities/restaurant-order.entity';
import { MenuItems } from '../delivery/menu-items/entities/menu-item.entity';
import { MenuitemOptions } from '../delivery/menu-item-options/entities/menu-item-option.entity';
import { Company } from '../users/company/entities/company.entity';
import { DeliveryCharges } from '../delivery/delivery-charges/entities/delivery-charge.entity';
import { Coupon } from '../payments/coupon/entities/coupon.entity';
import { UserAddress } from '../users/user-address/entities/user-address.entity';
import { OrderDetails } from '../orders/order-details/entities/order-detail.entity';

// ─── Mock factory ─────────────────────────────────────────────────────────────

interface MockRepo {
  createQueryBuilder: jest.Mock;
  findOne: jest.Mock;
  findOneBy: jest.Mock;
  find: jest.Mock;
  create: jest.Mock;
  save: jest.Mock;
  update: jest.Mock;
  delete: jest.Mock;
}

function makeRepo(overrides: Partial<MockRepo> = {}): MockRepo {
  return {
    createQueryBuilder: jest.fn().mockReturnValue({
      where: jest.fn().mockReturnThis(),
      andWhere: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      orderBy: jest.fn().mockReturnThis(),
      leftJoinAndSelect: jest.fn().mockReturnThis(),
      getMany: jest.fn().mockResolvedValue([]),
      getOne: jest.fn().mockResolvedValue(null),
    }),
    findOne: jest.fn().mockResolvedValue(null),
    findOneBy: jest.fn().mockResolvedValue(null),
    find: jest.fn().mockResolvedValue([]),
    create: jest.fn().mockReturnValue({}),
    save: jest
      .fn()
      .mockImplementation((e: object) => Promise.resolve({ ...e, id: 1 })),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
    ...overrides,
  };
}

describe('CartService', () => {
  let service: CartService;
  let cartRepo: MockRepo;
  let orderRepo: MockRepo;
  let menuRepo: MockRepo;
  let couponRepo: MockRepo;
  let companyRepo: MockRepo;
  let addressRepo: MockRepo;
  let deliveryChargeRepo: MockRepo;

  beforeEach(async () => {
    cartRepo = makeRepo();
    orderRepo = makeRepo();
    menuRepo = makeRepo();
    couponRepo = makeRepo();
    companyRepo = makeRepo();
    addressRepo = makeRepo();
    deliveryChargeRepo = makeRepo();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        { provide: getRepositoryToken(RestaurantCartItem), useValue: cartRepo },
        { provide: getRepositoryToken(RestaurantOrder), useValue: orderRepo },
        { provide: getRepositoryToken(MenuItems), useValue: menuRepo },
        { provide: getRepositoryToken(MenuitemOptions), useValue: makeRepo() },
        { provide: getRepositoryToken(Company), useValue: companyRepo },
        {
          provide: getRepositoryToken(DeliveryCharges),
          useValue: deliveryChargeRepo,
        },
        { provide: getRepositoryToken(Coupon), useValue: couponRepo },
        { provide: getRepositoryToken(UserAddress), useValue: addressRepo },
        { provide: getRepositoryToken(OrderDetails), useValue: makeRepo() },
      ],
    }).compile();

    service = module.get<CartService>(CartService);
  });

  // ─── addItem ─────────────────────────────────────────────────────────────────

  describe('addItem', () => {
    const dto = {
      iUserId: 1,
      iCompanyId: 5,
      iMenuItemId: 10,
      iFoodMenuId: 2,
      vOptionId: '',
      vAddonId: '',
      iQty: 1,
    };

    it('ajoute un article et sauvegarde dans la DB', async () => {
      const mockItem = { iMenuItemId: 10, iFoodMenuId: 2, iStatus: 'Active' };
      menuRepo.findOneBy.mockResolvedValue(mockItem);

      // Pas d'articles d'un autre restaurant (premier qb)
      const qbList = {
        where: jest.fn().mockReturnThis(),
        select: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue([]),
      };
      // Pas d'article identique existant (deuxieme qb)
      const qbExisting = {
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(null),
      };
      cartRepo.createQueryBuilder
        .mockReturnValueOnce(qbList)
        .mockReturnValueOnce(qbExisting);

      cartRepo.create.mockReturnValue({ ...dto });
      cartRepo.save.mockResolvedValue({ ...dto, id: 1 });

      const result = await service.addItem(dto);
      expect(cartRepo.save).toHaveBeenCalled();
      expect(result).toBeDefined();
    });

    it('ajoute un nouvel article sans article identique existant', async () => {
      cartRepo.find.mockResolvedValueOnce([]); // panier vide
      cartRepo.findOne.mockResolvedValue(null); // pas de doublon
      cartRepo.create.mockReturnValue({ ...dto, id: 1 });
      cartRepo.save.mockResolvedValue({ ...dto, id: 1 });
      cartRepo.find.mockResolvedValueOnce([{ ...dto, id: 1, iQty: 1 }]); // liste finale

      const result = await service.addItem(dto);
      expect(cartRepo.save).toHaveBeenCalled();
      expect(result.totalQty).toBe(1);
    });
  });

  // ─── getCart ─────────────────────────────────────────────────────────────────

  describe('getCart', () => {
    it('retourne un panier vide si aucun article', async () => {
      const qb = {
        where: jest.fn().mockReturnThis(),
        leftJoinAndSelect: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue([]),
      };
      cartRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.getCart(1);
      expect(result.items).toEqual([]);
      expect(result.fSubTotal).toBe(0);
    });
  });

  // ─── Adresse de livraison (getCart / checkout) ─────────────────────────────

  describe('adresse de livraison', () => {
    const ownedCriteria = (addressId: number) => ({
      iUserAddressId: addressId,
      iUserId: 1,
      eUserType: 'Rider',
      eStatus: 'Active',
    });

    const company = {
      iCompanyId: 5,
      vName: 'Chez Awa',
      fOfferAppyType: 'None',
      fOfferType: 'Flat',
      fOfferAmt: 0,
      fMaxOfferAmt: 0,
      fTargetAmt: 0,
      fTax: 0,
      fPackingCharge: 0,
      fMinOrderValue: 0,
      vRestuarantLocationLat: '5.30',
      vRestuarantLocationLong: '-4.00',
    };
    const cartItem = {
      id: 1,
      iUserId: 1,
      iCompanyId: 5,
      iMenuItemId: 10,
      iFoodMenuId: 2,
      vOptionId: '',
      vAddonId: '',
      iQty: 2,
      tInstruction: '',
    };
    const address = {
      iUserAddressId: 9,
      iUserId: 1,
      eUserType: 'Rider',
      eStatus: 'Active',
      vLatitude: '5.31',
      vLongitude: '-4.01',
      vTimeZone: 'Africa/Abidjan',
    };

    const stubCart = () => {
      cartRepo.find.mockResolvedValue([{ ...cartItem }]);
      companyRepo.findOneBy.mockResolvedValue({ ...company });
      menuRepo.createQueryBuilder.mockReturnValue({
        whereInIds: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue([
          {
            iMenuItemId: 10,
            fPrice: 10,
            fOfferAmt: 0,
            vItemTypeEn: 'Attieke',
          },
        ]),
      });
      deliveryChargeRepo.createQueryBuilder.mockReturnValue({
        where: jest.fn().mockReturnThis(),
        orderBy: jest.fn().mockReturnThis(),
        getMany: jest.fn().mockResolvedValue([
          {
            iFreeDeliveryRadius: 0,
            fFreeOrderPriceSubtotal: 0,
            fOrderPriceValue: 0,
            fDeliveryChargeAbove: 3,
            fDeliveryChargeBelow: 3,
          },
        ]),
      });
    };

    describe('getCart', () => {
      it('renvoie 404 pour une adresse absente, supprimée ou d un autre', async () => {
        addressRepo.findOneBy.mockResolvedValue(null);

        await expect(service.getCart(1, 9)).rejects.toThrow(NotFoundException);
        expect(addressRepo.findOneBy).toHaveBeenCalledWith(ownedCriteria(9));
        expect(cartRepo.find).not.toHaveBeenCalled();
      });

      it('calcule les frais de livraison avec l adresse résolue', async () => {
        stubCart();
        addressRepo.findOneBy.mockResolvedValue({ ...address });

        const result = await service.getCart(1, 9);

        expect(addressRepo.findOneBy).toHaveBeenCalledTimes(1);
        expect(result.fSubTotal).toBe(20);
        expect(result.fDeliveryCharge).toBe(3);
      });

      it('ne cherche pas d adresse et n applique pas de frais sans addressId', async () => {
        stubCart();

        const result = await service.getCart(1);

        expect(addressRepo.findOneBy).not.toHaveBeenCalled();
        expect(result.fDeliveryCharge).toBe(0);
      });
    });

    describe('checkout', () => {
      const dto = (overrides: Partial<CheckoutCartDto> = {}): CheckoutCartDto =>
        ({ iUserId: 1, iUserAddressId: 9, ...overrides }) as CheckoutCartDto;

      it('renvoie 404 pour une adresse absente, supprimée ou d un autre', async () => {
        stubCart();
        addressRepo.findOneBy.mockResolvedValue(null);

        await expect(service.checkout(dto())).rejects.toThrow(
          NotFoundException,
        );
        expect(addressRepo.findOneBy).toHaveBeenCalledWith(ownedCriteria(9));
        expect(orderRepo.save).not.toHaveBeenCalled();
      });

      it('enregistre la commande avec l adresse et les frais de livraison', async () => {
        stubCart();
        addressRepo.findOneBy.mockResolvedValue({ ...address });

        const result = await service.checkout(dto());

        expect(orderRepo.create).toHaveBeenCalledWith(
          expect.objectContaining({
            iUserAddressId: 9,
            vTimeZone: 'Africa/Abidjan',
            fDeliveryCharge: 3,
          }),
        );
        expect(result.fDeliveryCharge).toBe(3);
        expect(cartRepo.delete).toHaveBeenCalledWith({ iUserId: 1 });
      });

      it('accepte le retrait sur place sans adresse (iUserAddressId = 0, sans frais)', async () => {
        stubCart();
        addressRepo.findOneBy.mockResolvedValue(null);

        const result = await service.checkout(
          dto({ iUserAddressId: 0, eTakeAway: 'Yes' }),
        );

        expect(orderRepo.create).toHaveBeenCalledWith(
          expect.objectContaining({
            iUserAddressId: 0,
            eTakeAway: 'Yes',
            fDeliveryCharge: 0,
          }),
        );
        expect(result.fDeliveryCharge).toBe(0);
      });

      it('ignore l adresse d un autre en retrait sur place', async () => {
        stubCart();
        addressRepo.findOneBy.mockResolvedValue(null);

        await service.checkout(dto({ iUserAddressId: 77, eTakeAway: 'Yes' }));

        expect(orderRepo.create).toHaveBeenCalledWith(
          expect.objectContaining({ iUserAddressId: 0 }),
        );
      });
    });
  });

  // ─── applyPromoCode ───────────────────────────────────────────────────────────

  describe('applyPromoCode', () => {
    it('retourne { valid: false } si le code promo est invalide', async () => {
      const qb = {
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(null),
      };
      couponRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.applyPromoCode(1, 'FAUX_CODE', 100, 5);
      expect(result.valid).toBe(false);
    });

    it('retourne { valid: true, fDiscount } si le code promo est valide (Percentage)', async () => {
      const mockCoupon = {
        vCouponCode: 'PROMO10',
        eCouponType: 'Percentage',
        fDiscount: 10,
        dEndDate: new Date(Date.now() + 86400000), // demain
        eStatus: 'Active',
        iUsageLimit: 100,
        iUsageCount: 5,
        iStoreId: 0,
        eFreeDelivery: 'No',
      };
      const qb = {
        where: jest.fn().mockReturnThis(),
        andWhere: jest.fn().mockReturnThis(),
        getOne: jest.fn().mockResolvedValue(mockCoupon),
      };
      couponRepo.createQueryBuilder.mockReturnValue(qb);

      const result = await service.applyPromoCode(1, 'PROMO10', 100, 5);
      expect(result.valid).toBe(true);
      expect(result.fDiscount).toBeGreaterThan(0);
    });
  });
});
