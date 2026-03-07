import { Controller, Get, Post, Delete, Body, Param, Query } from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { CheckoutCartDto } from './dto/checkout-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /** POST /cart/add — Ajouter / fusionner un article dans le panier */
  @Post('add')
  addItem(@Body() dto: AddCartItemDto) {
    return this.cartService.addItem(dto);
  }

  /** GET /cart/:userId?addressId= — Voir le panier avec totaux calculés */
  @Get(':userId')
  getCart(
    @Param('userId') userId: string,
    @Query('addressId') addressId?: string,
  ) {
    return this.cartService.getCart(+userId, addressId ? +addressId : undefined);
  }

  /** DELETE /cart/:userId/item/:itemId — Supprimer un article du panier */
  @Delete(':userId/item/:itemId')
  removeItem(
    @Param('userId') userId: string,
    @Param('itemId') itemId: string,
  ) {
    return this.cartService.removeItem(+userId, +itemId);
  }

  /** DELETE /cart/:userId — Vider le panier */
  @Delete(':userId')
  clearCart(@Param('userId') userId: string) {
    return this.cartService.clearCart(+userId);
  }

  /** POST /cart/promo-code — Valider et calculer un code promo */
  @Post('promo-code')
  applyPromoCode(
    @Body('iUserId') iUserId: number,
    @Body('vCouponCode') vCouponCode: string,
    @Body('fNetTotal') fNetTotal: number,
    @Body('fDeliveryCharge') fDeliveryCharge: number,
    @Body('iCompanyId') iCompanyId?: number,
  ) {
    return this.cartService.applyPromoCode(iUserId, vCouponCode, fNetTotal, fDeliveryCharge, iCompanyId);
  }

  /** POST /cart/checkout — Finaliser la commande */
  @Post('checkout')
  checkout(@Body() dto: CheckoutCartDto) {
    return this.cartService.checkout(dto);
  }
}
