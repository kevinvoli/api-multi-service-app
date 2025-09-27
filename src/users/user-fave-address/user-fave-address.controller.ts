import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFaveAddressService } from './user-fave-address.service';
import { CreateUserFaveAddressDto } from './dto/create-user-fave-address.dto';
import { UpdateUserFaveAddressDto } from './dto/update-user-fave-address.dto';

@Controller('user-fave-address')
export class UserFaveAddressController {
  constructor(private readonly userFaveAddressService: UserFaveAddressService) {}

  @Post()
  async create(@Body() createUserFaveAddressDto: CreateUserFaveAddressDto) {
    return await this.userFaveAddressService.create(createUserFaveAddressDto);
  }

  @Get()
  async findAll() {
    return await this.userFaveAddressService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userFaveAddressService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserFaveAddressDto: UpdateUserFaveAddressDto) {
    return await this.userFaveAddressService.update(+id, updateUserFaveAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userFaveAddressService.remove(+id);
  }
}
