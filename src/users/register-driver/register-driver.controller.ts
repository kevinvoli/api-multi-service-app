import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterDriverService } from './register-driver.service';
import { CreateRegisterDriverDto } from './dto/create-register-driver.dto';
import { UpdateRegisterDriverDto } from './dto/update-register-driver.dto';

@Controller('register-driver')
export class RegisterDriverController {
  constructor(private readonly registerDriverService: RegisterDriverService) {}

  @Post()
  async create(@Body() createRegisterDriverDto: CreateRegisterDriverDto) {
    return await this.registerDriverService.create(createRegisterDriverDto);
  }

  @Get()
  async findAll() {
    return await this.registerDriverService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.registerDriverService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRegisterDriverDto: UpdateRegisterDriverDto) {
    return await this.registerDriverService.update(+id, updateRegisterDriverDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.registerDriverService.remove(+id);
  }
}
