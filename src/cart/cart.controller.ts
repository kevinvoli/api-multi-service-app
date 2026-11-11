import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddCartItemDto } from './dto/add-cart-item.dto';
import { ApplyPromoCodeDto } from './dto/apply-promo-code.dto';
import { CheckoutCartDto } from './dto/checkout-cart.dto';
import { AuthUser } from '../auth/auth.types';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import { assertSelf, isAdmin } from '../auth/ownership';
import { StrictValidationPipe } from '../common/pipes/strict-validation.pipe';

@Controller('cart')
@Roles('rider')
@UsePipes(StrictValidationPipe)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  /** POST /cart/add — Ajouter / fusionner un article dans le panier */
  @Post('add')
  addItem(@Body() dto: AddCartItemDto, @CurrentUser() user: AuthUser) {
    assertSelf(user, dto.iUserId);
    return this.cartService.addItem(dto);
  }

  /** POST /cart/promo-code — Valider et calculer un code promo */
  @Post('promo-code')
  applyPromoCode(
    @Body() dto: ApplyPromoCodeDto,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, dto.iUserId);
    return this.cartService.applyPromoCode(
      dto.iUserId,
      dto.vCouponCode,
      dto.fNetTotal,
      dto.fDeliveryCharge,
      dto.iCompanyId,
    );
  }

  /** POST /cart/checkout — Finaliser la commande */
  @Post('checkout')
  checkout(@Body() dto: CheckoutCartDto, @CurrentUser() user: AuthUser) {
    assertSelf(user, dto.iUserId);
    if (!isAdmin(user)) dto.eOrderplacedBy = 'User';
    return this.cartService.checkout(dto);
  }

  /** GET /cart/:userId?addressId= — Voir le panier avec totaux calculés */
  @Get(':userId')
  getCart(
    @Param('userId', ParseIntPipe) userId: number,
    @CurrentUser() user: AuthUser,
    @Query('addressId', new ParseIntPipe({ optional: true }))
    addressId?: number,
  ) {
    assertSelf(user, userId);
    return this.cartService.getCart(userId, addressId);
  }

  /** DELETE /cart/:userId/item/:itemId — Supprimer un article du panier */
  @Delete(':userId/item/:itemId')
  removeItem(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('itemId', ParseIntPipe) itemId: number,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, userId);
    return this.cartService.removeItem(userId, itemId);
  }

  /** DELETE /cart/:userId — Vider le panier */
  @Delete(':userId')
  clearCart(
    @Param('userId', ParseIntPipe) userId: number,
    @CurrentUser() user: AuthUser,
  ) {
    assertSelf(user, userId);
    return this.cartService.clearCart(userId);
  }
}
