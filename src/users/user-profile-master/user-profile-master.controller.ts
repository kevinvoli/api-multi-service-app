import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProfileMasterService } from './user-profile-master.service';
import { CreateUserProfileMasterDto } from './dto/create-user-profile-master.dto';
import { UpdateUserProfileMasterDto } from './dto/update-user-profile-master.dto';

@Controller('user-profile-master')
export class UserProfileMasterController {
  constructor(private readonly userProfileMasterService: UserProfileMasterService) {}

  @Post()
  async create(@Body() createUserProfileMasterDto: CreateUserProfileMasterDto) {
    return await this.userProfileMasterService.create(createUserProfileMasterDto);
  }

  @Get()
  async findAll() {
    return await this.userProfileMasterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userProfileMasterService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserProfileMasterDto: UpdateUserProfileMasterDto) {
    return await this.userProfileMasterService.update(+id, updateUserProfileMasterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.userProfileMasterService.remove(+id);
  }
}
