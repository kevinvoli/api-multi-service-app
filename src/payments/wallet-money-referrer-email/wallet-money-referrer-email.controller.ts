import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WalletMoneyReferrerEmailService } from './wallet-money-referrer-email.service';
import { CreateWalletMoneyReferrerEmailDto } from './dto/create-wallet-money-referrer-email.dto';
import { UpdateWalletMoneyReferrerEmailDto } from './dto/update-wallet-money-referrer-email.dto';

@Controller('wallet-money-referrer-email')
export class WalletMoneyReferrerEmailController {
  constructor(private readonly walletMoneyReferrerEmailService: WalletMoneyReferrerEmailService) {}

  @Post()
  create(@Body() createWalletMoneyReferrerEmailDto: CreateWalletMoneyReferrerEmailDto) {
    return this.walletMoneyReferrerEmailService.create(createWalletMoneyReferrerEmailDto);
  }

  @Get()
  findAll() {
    return this.walletMoneyReferrerEmailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.walletMoneyReferrerEmailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWalletMoneyReferrerEmailDto: UpdateWalletMoneyReferrerEmailDto) {
    return this.walletMoneyReferrerEmailService.update(+id, updateWalletMoneyReferrerEmailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.walletMoneyReferrerEmailService.remove(+id);
  }
}
