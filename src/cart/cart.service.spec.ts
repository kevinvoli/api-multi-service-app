import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CartService } from './cart.service';
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

function makeRepo(overrides: any = {}) {
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
    save: jest.fn().mockImplementation((e) => Promise.resolve({ ...e, id: 1 })),
    update: jest.fn().mockResolvedValue({ affected: 1 }),
    delete: jest.fn().mockResolvedValue({ affected: 1 }),
    ...overrides,
  };
}

describe('CartService', () => {
  let service: CartService;
  let cartRepo: any;
  let orderRepo: any;
  let menuRepo: any;
  let couponRepo: any;

  beforeEach(async () => {
    cartRepo = makeRepo();
    orderRepo = makeRepo();
    menuRepo = makeRepo();
    couponRepo = makeRepo();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        { provide: getRepositoryToken(RestaurantCartItem), useValue: cartRepo },
        { provide: getRepositoryToken(RestaurantOrder), useValue: orderRepo },
        { provide: getRepositoryToken(MenuItems), useValue: menuRepo },
        { provide: getRepositoryToken(MenuitemOptions), useValue: makeRepo() },
        { provide: getRepositoryToken(Company), useValue: makeRepo() },
        { provide: getRepositoryToken(DeliveryCharges), useValue: makeRepo() },
        { provide: getRepositoryToken(Coupon), useValue: couponRepo },
        { provide: getRepositoryToken(UserAddress), useValue: makeRepo() },
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

    it('leve NotFoundException si le menu item n\'existe pas', async () => {
      menuRepo.findOneBy.mockResolvedValue(null);
      await expect(service.addItem(dto)).rejects.toThrow(NotFoundException);
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
      expect(result.subtotal).toBe(0);
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
