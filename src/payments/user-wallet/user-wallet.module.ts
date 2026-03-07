import { Module } from '@nestjs/common';
import { UserWallet } from './entities/user-wallet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWalletService } from './user-wallet.service';
import { UserWalletController } from './user-wallet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserWallet])],
  controllers: [UserWalletController],
  providers: [UserWalletService],
  exports: [TypeOrmModule.forFeature([UserWallet])],
})
export class UserWalletModule {}
