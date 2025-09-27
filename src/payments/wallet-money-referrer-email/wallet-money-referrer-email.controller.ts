import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { CreateWalletMoneyReferrerEmailDto } from './dto/create-wallet-money-referrer-email.dto';
import { UpdateWalletMoneyReferrerEmailDto } from './dto/update-wallet-money-referrer-email.dto';
import { WalletMoneyReferrerEmail } from './entities/wallet-money-referrer-email.entity';

@Controller('wallet-money-referrer-email')
export class WalletMoneyReferrerEmailController {
  constructor(private readonly walletMoneyReferrerEmailService: WalletMoneyReferrerEmailService) {}

  @Post()
  async create(@Body() createWalletMoneyReferrerEmailDto: CreateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    return this.walletMoneyReferrerEmailService.create(createWalletMoneyReferrerEmailDto);
  }

  @Get()
  async findAll(): Promise<WalletMoneyReferrerEmail[]> {
    return this.walletMoneyReferrerEmailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<WalletMoneyReferrerEmail> {
    return this.walletMoneyReferrerEmailService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateWalletMoneyReferrerEmailDto: UpdateWalletMoneyReferrerEmailDto): Promise<WalletMoneyReferrerEmail> {
    return this.walletMoneyReferrerEmailService.update(id, updateWalletMoneyReferrerEmailDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.walletMoneyReferrerEmailService.remove(id);
  }
}