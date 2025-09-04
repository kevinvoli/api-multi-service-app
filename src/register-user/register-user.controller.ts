import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';

@Controller('register-user')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  create(@Body() createRegisterUserDto: CreateRegisterUserDto) {
    return this.registerUserService.create(createRegisterUserDto);
  }

  @Get()
  findAll() {
    return this.registerUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerUserService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterUserDto: UpdateRegisterUserDto) {
    return this.registerUserService.update(+id, updateRegisterUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerUserService.remove(+id);
  }
}
