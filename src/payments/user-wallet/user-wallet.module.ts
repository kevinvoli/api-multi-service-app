import { Module } from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { UserWalletController } from './user-wallet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWallet } from './entities/user-wallet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserWallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService],
})
export class UserWalletModule {}