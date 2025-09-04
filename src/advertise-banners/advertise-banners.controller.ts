import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdvertiseBannersService } from './advertise-banners.service';
import { CreateAdvertiseBannerDto } from './dto/create-advertise-banner.dto';
import { UpdateAdvertiseBannerDto } from './dto/update-advertise-banner.dto';

@Controller('advertise-banners')
export class AdvertiseBannersController {
  constructor(private readonly advertiseBannersService: AdvertiseBannersService) {}

  @Post()
  create(@Body() createAdvertiseBannerDto: CreateAdvertiseBannerDto) {
    return this.advertiseBannersService.create(createAdvertiseBannerDto);
  }

  @Get()
  findAll() {
    return this.advertiseBannersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.advertiseBannersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdvertiseBannerDto: UpdateAdvertiseBannerDto) {
    return this.advertiseBannersService.update(+id, updateAdvertiseBannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.advertiseBannersService.remove(+id);
  }
}
