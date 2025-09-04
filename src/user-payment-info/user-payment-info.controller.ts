import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPaymentInfoService } from './user-payment-info.service';
import { CreateUserPaymentInfoDto } from './dto/create-user-payment-info.dto';
import { UpdateUserPaymentInfoDto } from './dto/update-user-payment-info.dto';

@Controller('user-payment-info')
export class UserPaymentInfoController {
  constructor(private readonly userPaymentInfoService: UserPaymentInfoService) {}

  @Post()
  create(@Body() createUserPaymentInfoDto: CreateUserPaymentInfoDto) {
    return this.userPaymentInfoService.create(createUserPaymentInfoDto);
  }

  @Get()
  findAll() {
    return this.userPaymentInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userPaymentInfoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserPaymentInfoDto: UpdateUserPaymentInfoDto) {
    return this.userPaymentInfoService.update(+id, updateUserPaymentInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userPaymentInfoService.remove(+id);
  }
}
