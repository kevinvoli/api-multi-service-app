import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelBannersService } from './hotel-banners.service';
import { CreateHotelBannerDto } from './dto/create-hotel-banner.dto';
import { UpdateHotelBannerDto } from './dto/update-hotel-banner.dto';

@Controller('hotel-banners')
export class HotelBannersController {
  constructor(private readonly hotelBannersService: HotelBannersService) {}

  @Post()
  create(@Body() createHotelBannerDto: CreateHotelBannerDto) {
    return this.hotelBannersService.create(createHotelBannerDto);
  }

  @Get()
  findAll() {
    return this.hotelBannersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelBannersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelBannerDto: UpdateHotelBannerDto) {
    return this.hotelBannersService.update(+id, updateHotelBannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelBannersService.remove(+id);
  }
}
