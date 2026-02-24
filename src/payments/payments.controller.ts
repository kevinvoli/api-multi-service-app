import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentTransaction } from './entities/payment-transaction.entity';
import { UserWallet } from './entities/user-wallet.entity';
import { IsNumber } from 'class-validator';

// DTO for wallet operations
class WalletOperationDto {
  @IsNumber()
  amount: number;
}

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  // Payment Transaction Endpoints
  @Post('transactions')
  @HttpCode(HttpStatus.CREATED)
  createPaymentTransaction(@Body() createPaymentDto: CreatePaymentDto): Promise<PaymentTransaction> {
    return this.paymentsService.createPaymentTransaction(createPaymentDto);
  }

  @Get('transactions')
  findAllPaymentTransactions(): Promise<PaymentTransaction[]> {
    return this.paymentsService.findAllPaymentTransactions();
  }

  @Get('transactions/:id')
  findOnePaymentTransaction(@Param('id') id: string): Promise<PaymentTransaction> {
    return this.paymentsService.findOnePaymentTransaction(+id);
  }

  @Patch('transactions/:id')
  updatePaymentTransaction(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto): Promise<PaymentTransaction> {
    return this.paymentsService.updatePaymentTransaction(+id, updatePaymentDto);
  }

  @Delete('transactions/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removePaymentTransaction(@Param('id') id: string): Promise<void> {
    return this.paymentsService.removePaymentTransaction(+id);
  }

  // User Wallet Endpoints
  @Get('wallets/user/:userId')
  getUserWallet(@Param('userId') userId: string): Promise<UserWallet> {
    return this.paymentsService.getUserWallet(+userId);
  }

  @Patch('wallets/user/:userId/credit')
  creditUserWallet(@Param('userId') userId: string, @Body() walletOperationDto: WalletOperationDto): Promise<UserWallet> {
    return this.paymentsService.creditUserWallet(+userId, walletOperationDto.amount);
  }

  @Patch('wallets/user/:userId/debit')
  debitUserWallet(@Param('userId') userId: string, @Body() walletOperationDto: WalletOperationDto): Promise<UserWallet> {
    return this.paymentsService.debitUserWallet(+userId, walletOperationDto.amount);
  }
}
