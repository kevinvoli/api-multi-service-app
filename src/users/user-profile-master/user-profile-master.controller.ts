import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileMasterService } from './user-profile-master.service';
import { CreateUserProfileMasterDto } from './dto/create-user-profile-master.dto';
import { UpdateUserProfileMasterDto } from './dto/update-user-profile-master.dto';

@Controller('user-profile-master')
export class UserProfileMasterController {
  constructor(private readonly userProfileMasterService: UserProfileMasterService) {}

  @Post()
  create(@Body() createUserProfileMasterDto: CreateUserProfileMasterDto) {
    return this.userProfileMasterService.create(createUserProfileMasterDto);
  }

  @Get()
  findAll() {
    return this.userProfileMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProfileMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserProfileMasterDto: UpdateUserProfileMasterDto) {
    return this.userProfileMasterService.update(+id, updateUserProfileMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProfileMasterService.remove(+id);
  }
}
