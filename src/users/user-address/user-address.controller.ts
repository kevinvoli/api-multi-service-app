import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAddressService } from './user-address.service';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';

@Controller('user-address')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}

  @Post()
  async create(@Body() createUserAddressDto: CreateUserAddressDto) {
    return await this.userAddressService.create(createUserAddressDto);
  }

  @Get()
  async findAll() {
    return await this.userAddressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userAddressService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserAddressDto: UpdateUserAddressDto) {
    return await this.userAddressService.update(+id, updateUserAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userAddressService.remove(+id);
  }
}
