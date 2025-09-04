import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BannerImpressionService } from './banner-impression.service';
import { CreateBannerImpressionDto } from './dto/create-banner-impression.dto';
import { UpdateBannerImpressionDto } from './dto/update-banner-impression.dto';

@Controller('banner-impression')
export class BannerImpressionController {
  constructor(private readonly bannerImpressionService: BannerImpressionService) {}

  @Post()
  create(@Body() createBannerImpressionDto: CreateBannerImpressionDto) {
    return this.bannerImpressionService.create(createBannerImpressionDto);
  }

  @Get()
  findAll() {
    return this.bannerImpressionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bannerImpressionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBannerImpressionDto: UpdateBannerImpressionDto) {
    return this.bannerImpressionService.update(+id, updateBannerImpressionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bannerImpressionService.remove(+id);
  }
}
