import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StoreWiseBannersService } from './store-wise-banners.service';
import { CreateStoreWiseBannerDto } from './dto/create-store-wise-banner.dto';
import { UpdateStoreWiseBannerDto } from './dto/update-store-wise-banner.dto';

@Controller('store-wise-banners')
export class StoreWiseBannersController {
  constructor(private readonly storeWiseBannersService: StoreWiseBannersService) {}

  @Post()
  create(@Body() createStoreWiseBannerDto: CreateStoreWiseBannerDto) {
    return this.storeWiseBannersService.create(createStoreWiseBannerDto);
  }

  @Get()
  findAll() {
    return this.storeWiseBannersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeWiseBannersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreWiseBannerDto: UpdateStoreWiseBannerDto) {
    return this.storeWiseBannersService.update(+id, updateStoreWiseBannerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeWiseBannersService.remove(+id);
  }
}
