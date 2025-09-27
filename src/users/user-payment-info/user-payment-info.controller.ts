import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserPaymentInfoService } from './user-payment-info.service';
import { CreateUserPaymentInfoDto } from './dto/create-user-payment-info.dto';
import { UpdateUserPaymentInfoDto } from './dto/update-user-payment-info.dto';

@Controller('user-payment-info')
export class UserPaymentInfoController {
  constructor(private readonly userPaymentInfoService: UserPaymentInfoService) {}

  @Post()
  async create(@Body() createUserPaymentInfoDto: CreateUserPaymentInfoDto) {
    return await this.userPaymentInfoService.create(createUserPaymentInfoDto);
  }

  @Get()
  async findAll() {
    return await this.userPaymentInfoService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userPaymentInfoService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserPaymentInfoDto: UpdateUserPaymentInfoDto) {
    return await this.userPaymentInfoService.update(+id, updateUserPaymentInfoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userPaymentInfoService.remove(+id);
  }
}
