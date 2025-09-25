import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberLoginSessionLogService } from './member-login-session-log.service';
import { CreateMemberLoginSessionLogDto } from './dto/create-member-login-session-log.dto';
import { UpdateMemberLoginSessionLogDto } from './dto/update-member-login-session-log.dto';

@Controller('member-login-session-log')
export class MemberLoginSessionLogController {
  constructor(private readonly memberLoginSessionLogService: MemberLoginSessionLogService) {}

  @Post()
  create(@Body() createMemberLoginSessionLogDto: CreateMemberLoginSessionLogDto) {
    return this.memberLoginSessionLogService.create(createMemberLoginSessionLogDto);
  }

  @Get()
  findAll() {
    return this.memberLoginSessionLogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberLoginSessionLogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberLoginSessionLogDto: UpdateMemberLoginSessionLogDto) {
    return this.memberLoginSessionLogService.update(+id, updateMemberLoginSessionLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberLoginSessionLogService.remove(+id);
  }
}
