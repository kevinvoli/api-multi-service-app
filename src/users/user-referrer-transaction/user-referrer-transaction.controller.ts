import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { CreateUserReferrerTransactionDto } from './dto/create-user-referrer-transaction.dto';
import { UpdateUserReferrerTransactionDto } from './dto/update-user-referrer-transaction.dto';

@Controller('user-referrer-transaction')
export class UserReferrerTransactionController {
  constructor(private readonly userReferrerTransactionService: UserReferrerTransactionService) {}

  @Post()
  async create(@Body() createUserReferrerTransactionDto: CreateUserReferrerTransactionDto) {
    return await this.userReferrerTransactionService.create(createUserReferrerTransactionDto);
  }

  @Get()
  async findAll() {
    return await this.userReferrerTransactionService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userReferrerTransactionService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserReferrerTransactionDto: UpdateUserReferrerTransactionDto) {
    return await this.userReferrerTransactionService.update(+id, updateUserReferrerTransactionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userReferrerTransactionService.remove(+id);
  }
}
