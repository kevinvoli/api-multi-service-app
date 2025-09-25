import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemberLogsService } from './member-logs.service';
import { CreateMemberLogDto } from './dto/create-member-log.dto';
import { UpdateMemberLogDto } from './dto/update-member-log.dto';

@Controller('member-logs')
export class MemberLogsController {
  constructor(private readonly memberLogsService: MemberLogsService) {}

  @Post()
  create(@Body() createMemberLogDto: CreateMemberLogDto) {
    return this.memberLogsService.create(createMemberLogDto);
  }

  @Get()
  findAll() {
    return this.memberLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.memberLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMemberLogDto: UpdateMemberLogDto) {
    return this.memberLogsService.update(+id, updateMemberLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.memberLogsService.remove(+id);
  }
}
