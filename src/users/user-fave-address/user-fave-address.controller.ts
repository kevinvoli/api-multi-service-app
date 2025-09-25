import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFaveAddressService } from './user-fave-address.service';
import { CreateUserFaveAddressDto } from './dto/create-user-fave-address.dto';
import { UpdateUserFaveAddressDto } from './dto/update-user-fave-address.dto';

@Controller('user-fave-address')
export class UserFaveAddressController {
  constructor(private readonly userFaveAddressService: UserFaveAddressService) {}

  @Post()
  create(@Body() createUserFaveAddressDto: CreateUserFaveAddressDto) {
    return this.userFaveAddressService.create(createUserFaveAddressDto);
  }

  @Get()
  findAll() {
    return this.userFaveAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFaveAddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserFaveAddressDto: UpdateUserFaveAddressDto) {
    return this.userFaveAddressService.update(+id, updateUserFaveAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFaveAddressService.remove(+id);
  }
}
