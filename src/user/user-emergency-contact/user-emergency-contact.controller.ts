import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserEmergencyContactService } from './user-emergency-contact.service';
import { CreateUserEmergencyContactDto } from './dto/create-user-emergency-contact.dto';
import { UpdateUserEmergencyContactDto } from './dto/update-user-emergency-contact.dto';

@Controller('user-emergency-contact')
export class UserEmergencyContactController {
  constructor(private readonly userEmergencyContactService: UserEmergencyContactService) {}

  @Post()
  create(@Body() createUserEmergencyContactDto: CreateUserEmergencyContactDto) {
    return this.userEmergencyContactService.create(createUserEmergencyContactDto);
  }

  @Get()
  findAll() {
    return this.userEmergencyContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userEmergencyContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserEmergencyContactDto: UpdateUserEmergencyContactDto) {
    return this.userEmergencyContactService.update(+id, updateUserEmergencyContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userEmergencyContactService.remove(+id);
  }
}
