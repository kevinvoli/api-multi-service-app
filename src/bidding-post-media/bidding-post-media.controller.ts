import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingPostMediaService } from './bidding-post-media.service';
import { CreateBiddingPostMediaDto } from './dto/create-bidding-post-media.dto';
import { UpdateBiddingPostMediaDto } from './dto/update-bidding-post-media.dto';

@Controller('bidding-post-media')
export class BiddingPostMediaController {
  constructor(private readonly biddingPostMediaService: BiddingPostMediaService) {}

  @Post()
  create(@Body() createBiddingPostMediaDto: CreateBiddingPostMediaDto) {
    return this.biddingPostMediaService.create(createBiddingPostMediaDto);
  }

  @Get()
  findAll() {
    return this.biddingPostMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingPostMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingPostMediaDto: UpdateBiddingPostMediaDto) {
    return this.biddingPostMediaService.update(+id, updateBiddingPostMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingPostMediaService.remove(+id);
  }
}
