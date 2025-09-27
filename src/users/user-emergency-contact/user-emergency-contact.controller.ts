import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEmergencyContactService } from './user-emergency-contact.service';
import { CreateUserEmergencyContactDto } from './dto/create-user-emergency-contact.dto';
import { UpdateUserEmergencyContactDto } from './dto/update-user-emergency-contact.dto';

@Controller('user-emergency-contact')
export class UserEmergencyContactController {
  constructor(private readonly userEmergencyContactService: UserEmergencyContactService) {}

  @Post()
  async create(@Body() createUserEmergencyContactDto: CreateUserEmergencyContactDto) {
    return await this.userEmergencyContactService.create(createUserEmergencyContactDto);
  }

  @Get()
  async findAll() {
    return await this.userEmergencyContactService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userEmergencyContactService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserEmergencyContactDto: UpdateUserEmergencyContactDto) {
    return await this.userEmergencyContactService.update(+id, updateUserEmergencyContactDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userEmergencyContactService.remove(+id);
  }
}
