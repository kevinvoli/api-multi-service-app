import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvertiseBannersService } from './advertise-banners.service';
import { CreateAdvertiseBannerDto } from './dto/create-advertise-banner.dto';
import { UpdateAdvertiseBannerDto } from './dto/update-advertise-banner.dto';

@Controller('advertise-banners')
export class AdvertiseBannersController {
  constructor(private readonly advertiseBannersService: AdvertiseBannersService) {}

  @Post()
  async create(@Body() createAdvertiseBannerDto: CreateAdvertiseBannerDto) {
    return await this.advertiseBannersService.create(createAdvertiseBannerDto);
  }

  @Get()
  async findAll() {
    return await this.advertiseBannersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.advertiseBannersService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAdvertiseBannerDto: UpdateAdvertiseBannerDto) {
    return await this.advertiseBannersService.update(+id, updateAdvertiseBannerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.advertiseBannersService.remove(+id);
  }
}