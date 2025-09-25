import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterDriverService } from './register-driver.service';
import { CreateRegisterDriverDto } from './dto/create-register-driver.dto';
import { UpdateRegisterDriverDto } from './dto/update-register-driver.dto';

@Controller('register-driver')
export class RegisterDriverController {
  constructor(private readonly registerDriverService: RegisterDriverService) {}

  @Post()
  create(@Body() createRegisterDriverDto: CreateRegisterDriverDto) {
    return this.registerDriverService.create(createRegisterDriverDto);
  }

  @Get()
  findAll() {
    return this.registerDriverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registerDriverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegisterDriverDto: UpdateRegisterDriverDto) {
    return this.registerDriverService.update(+id, updateRegisterDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registerDriverService.remove(+id);
  }
}
