import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';

@Controller('register-user')
export class RegisterUserController {
  constructor(private readonly registerUserService: RegisterUserService) {}

  @Post()
  async create(@Body() createRegisterUserDto: CreateRegisterUserDto) {
    return await this.registerUserService.create(createRegisterUserDto);
  }

  @Get()
  async findAll() {
    return await this.registerUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.registerUserService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegisterUserDto: UpdateRegisterUserDto) {
    return await this.registerUserService.update(+id, updateRegisterUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.registerUserService.remove(+id);
  }
}
