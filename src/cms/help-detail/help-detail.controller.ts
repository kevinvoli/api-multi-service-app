import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelpDetailService } from './help-detail.service';
import { CreateHelpDetailDto } from './dto/create-help-detail.dto';
import { UpdateHelpDetailDto } from './dto/update-help-detail.dto';

@Controller('help-detail')
export class HelpDetailController {
  constructor(private readonly helpDetailService: HelpDetailService) {}

  @Post()
  async create(@Body() createHelpDetailDto: CreateHelpDetailDto) {
    return await this.helpDetailService.create(createHelpDetailDto);
  }

  @Get()
  async findAll() {
    return await this.helpDetailService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.helpDetailService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateHelpDetailDto: UpdateHelpDetailDto) {
    return await this.helpDetailService.update(+id, updateHelpDetailDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.helpDetailService.remove(+id);
  }
}