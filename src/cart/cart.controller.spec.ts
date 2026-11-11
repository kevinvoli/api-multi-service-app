import { ForbiddenException } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { ApplyPromoCodeDto } from './dto/apply-promo-code.dto';
import { CheckoutCartDto } from './dto/checkout-cart.dto';
import { authUser } from '../../test/factories/auth-user.factory';
import { ROLES_KEY } from '../auth/decorators/roles.decorator';

const RIDER_A = authUser('rider', 10);
const RIDER_B_ID = 20;
const ADMIN = authUser('hotel', 1);

describe('CartController — contrôle d appartenance', () => {
  let controller: CartController;
  let service: Record<keyof CartService, jest.Mock>;

  beforeEach(() => {
    service = {
      addItem: jest.fn().mockResolvedValue({ ok: true }),
      applyPromoCode: jest.fn().mockResolvedValue({ ok: true }),
      checkout: jest.fn().mockResolvedValue({ ok: true }),
      getCart: jest.fn().mockResolvedValue({ items: [] }),
      removeItem: jest.fn().mockResolvedValue({ ok: true }),
      clearCart: jest.fn().mockResolvedValue({ ok: true }),
    } as unknown as Record<keyof CartService, jest.Mock>;
    controller = new CartController(service as unknown as CartService);
  });

  const expectNoServiceCall = () =>
    Object.values(service).forEach((fn) => expect(fn).not.toHaveBeenCalled());

  it('est réservé au rôle rider (et admin) au niveau de la classe', () => {
    expect(Reflect.getMetadata(ROLES_KEY, CartController)).toEqual(['rider']);
  });

  describe('rider A sur le panier de rider B', () => {
    it('ne peut pas lire le panier', () => {
      expect(() => controller.getCart(RIDER_B_ID, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('ne peut pas ajouter un article', () => {
      const dto = { iUserId: RIDER_B_ID } as AddCartItemDto;
      expect(() => controller.addItem(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('ne peut pas supprimer un article', () => {
      expect(() => controller.removeItem(RIDER_B_ID, 5, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('ne peut pas vider le panier', () => {
      expect(() => controller.clearCart(RIDER_B_ID, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('ne peut pas valider la commande', () => {
      const dto = { iUserId: RIDER_B_ID } as CheckoutCartDto;
      expect(() => controller.checkout(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });

    it('ne peut pas appliquer un code promo', () => {
      const dto = { iUserId: RIDER_B_ID } as ApplyPromoCodeDto;
      expect(() => controller.applyPromoCode(dto, RIDER_A)).toThrow(
        ForbiddenException,
      );
      expectNoServiceCall();
    });
  });

  describe('rider A sur son propre panier', () => {
    it('lit le panier', async () => {
      await expect(controller.getCart(10, RIDER_A, 3)).resolves.toEqual({
        items: [],
      });
      expect(service.getCart).toHaveBeenCalledWith(10, 3);
    });

    it('ajoute un article', async () => {
      const dto = { iUserId: 10 } as AddCartItemDto;
      await controller.addItem(dto, RIDER_A);
      expect(service.addItem).toHaveBeenCalledWith(dto);
    });

    it('supprime un article et vide le panier', async () => {
      await controller.removeItem(10, 5, RIDER_A);
      await controller.clearCart(10, RIDER_A);
      expect(service.removeItem).toHaveBeenCalledWith(10, 5);
      expect(service.clearCart).toHaveBeenCalledWith(10);
    });

    it('valide la commande', async () => {
      const dto = { iUserId: 10 } as CheckoutCartDto;
      await controller.checkout(dto, RIDER_A);
      expect(service.checkout).toHaveBeenCalledWith(dto);
    });

    it('force eOrderplacedBy à User quelle que soit la valeur envoyée', async () => {
      const dto = { iUserId: 10, eOrderplacedBy: 'Admin' } as CheckoutCartDto;
      await controller.checkout(dto, RIDER_A);
      expect(service.checkout).toHaveBeenCalledWith(
        expect.objectContaining({ eOrderplacedBy: 'User' }),
      );
    });

    it('applique un code promo avec les champs du DTO', async () => {
      const dto = {
        iUserId: 10,
        vCouponCode: 'PROMO',
        fNetTotal: 50,
        fDeliveryCharge: 5,
        iCompanyId: 2,
      } as ApplyPromoCodeDto;
      await controller.applyPromoCode(dto, RIDER_A);
      expect(service.applyPromoCode).toHaveBeenCalledWith(
        10,
        'PROMO',
        50,
        5,
        2,
      );
    });
  });

  describe('admin', () => {
    it('accède au panier de n importe quel rider', async () => {
      await controller.getCart(RIDER_B_ID, ADMIN);
      await controller.clearCart(RIDER_B_ID, ADMIN);
      await controller.removeItem(RIDER_B_ID, 5, ADMIN);
      await controller.addItem(
        { iUserId: RIDER_B_ID } as AddCartItemDto,
        ADMIN,
      );
      await controller.checkout(
        { iUserId: RIDER_B_ID } as CheckoutCartDto,
        ADMIN,
      );

      expect(service.getCart).toHaveBeenCalledWith(RIDER_B_ID, undefined);
      expect(service.clearCart).toHaveBeenCalledWith(RIDER_B_ID);
      expect(service.removeItem).toHaveBeenCalledWith(RIDER_B_ID, 5);
      expect(service.addItem).toHaveBeenCalledTimes(1);
      expect(service.checkout).toHaveBeenCalledTimes(1);
    });

    it('conserve le eOrderplacedBy envoyé à la commande', async () => {
      await controller.checkout(
        { iUserId: RIDER_B_ID, eOrderplacedBy: 'Admin' } as CheckoutCartDto,
        ADMIN,
      );
      expect(service.checkout).toHaveBeenCalledWith(
        expect.objectContaining({ eOrderplacedBy: 'Admin' }),
      );
    });
  });
});
