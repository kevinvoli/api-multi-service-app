import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserReferrerTransactionService } from './user-referrer-transaction.service';
import { CreateUserReferrerTransactionDto } from './dto/create-user-referrer-transaction.dto';
import { UpdateUserReferrerTransactionDto } from './dto/update-user-referrer-transaction.dto';

@Controller('user-referrer-transaction')
export class UserReferrerTransactionController {
  constructor(private readonly userReferrerTransactionService: UserReferrerTransactionService) {}

  @Post()
  create(@Body() createUserReferrerTransactionDto: CreateUserReferrerTransactionDto) {
    return this.userReferrerTransactionService.create(createUserReferrerTransactionDto);
  }

  @Get()
  findAll() {
    return this.userReferrerTransactionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userReferrerTransactionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserReferrerTransactionDto: UpdateUserReferrerTransactionDto) {
    return this.userReferrerTransactionService.update(+id, updateUserReferrerTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userReferrerTransactionService.remove(+id);
  }
}
