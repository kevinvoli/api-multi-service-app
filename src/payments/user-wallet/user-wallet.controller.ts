import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserWalletService } from './user-wallet.service';
import { CreateUserWalletDto } from './dto/create-user-wallet.dto';
import { UpdateUserWalletDto } from './dto/update-user-wallet.dto';
import { UserWallet } from './entities/user-wallet.entity';

@Controller('user-wallet')
export class UserWalletController {
  constructor(private readonly userWalletService: UserWalletService) {}

  @Post()
  async create(@Body() createUserWalletDto: CreateUserWalletDto): Promise<UserWallet> {
    return this.userWalletService.create(createUserWalletDto);
  }

  @Get()
  async findAll(): Promise<UserWallet[]> {
    return this.userWalletService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserWallet> {
    return this.userWalletService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateUserWalletDto: UpdateUserWalletDto): Promise<UserWallet> {
    return this.userWalletService.update(id, updateUserWalletDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.userWalletService.remove(id);
  }
}