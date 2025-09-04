import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpDetailService } from './help-detail.service';
import { CreateHelpDetailDto } from './dto/create-help-detail.dto';
import { UpdateHelpDetailDto } from './dto/update-help-detail.dto';

@Controller('help-detail')
export class HelpDetailController {
  constructor(private readonly helpDetailService: HelpDetailService) {}

  @Post()
  create(@Body() createHelpDetailDto: CreateHelpDetailDto) {
    return this.helpDetailService.create(createHelpDetailDto);
  }

  @Get()
  findAll() {
    return this.helpDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helpDetailService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelpDetailDto: UpdateHelpDetailDto) {
    return this.helpDetailService.update(+id, updateHelpDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helpDetailService.remove(+id);
  }
}
