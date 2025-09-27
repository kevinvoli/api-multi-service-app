import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannersService } from './banners.service';
import { CreateBannerDto } from './dto/create-banner.dto';
import { UpdateBannerDto } from './dto/update-banner.dto';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Post()
  async create(@Body() createBannerDto: CreateBannerDto) {
    return await this.bannersService.create(createBannerDto);
  }

  @Get()
  async findAll() {
    return await this.bannersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.bannersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBannerDto: UpdateBannerDto) {
    return await this.bannersService.update(+id, updateBannerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.bannersService.remove(+id);
  }
}