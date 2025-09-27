import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MakeService } from './make.service';
import { CreateMakeDto } from './dto/create-make.dto';
import { UpdateMakeDto } from './dto/update-make.dto';

@Controller('make')
export class MakeController {
  constructor(private readonly makeService: MakeService) {}

  @Post()
  async create(@Body() createMakeDto: CreateMakeDto) {
    return await this.makeService.create(createMakeDto);
  }

  @Get()
  async findAll() {
    return await this.makeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.makeService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateMakeDto: UpdateMakeDto) {
    return await this.makeService.update(+id, updateMakeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.makeService.remove(+id);
  }
}