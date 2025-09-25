import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserStatusLogsService } from './user-status-logs.service';
import { CreateUserStatusLogDto } from './dto/create-user-status-log.dto';
import { UpdateUserStatusLogDto } from './dto/update-user-status-log.dto';

@Controller('user-status-logs')
export class UserStatusLogsController {
  constructor(private readonly userStatusLogsService: UserStatusLogsService) {}

  @Post()
  create(@Body() createUserStatusLogDto: CreateUserStatusLogDto) {
    return this.userStatusLogsService.create(createUserStatusLogDto);
  }

  @Get()
  findAll() {
    return this.userStatusLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userStatusLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserStatusLogDto: UpdateUserStatusLogDto) {
    return this.userStatusLogsService.update(+id, updateUserStatusLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userStatusLogsService.remove(+id);
  }
}
