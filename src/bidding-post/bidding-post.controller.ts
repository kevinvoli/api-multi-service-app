import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingPostService } from './bidding-post.service';
import { CreateBiddingPostDto } from './dto/create-bidding-post.dto';
import { UpdateBiddingPostDto } from './dto/update-bidding-post.dto';

@Controller('bidding-post')
export class BiddingPostController {
  constructor(private readonly biddingPostService: BiddingPostService) {}

  @Post()
  create(@Body() createBiddingPostDto: CreateBiddingPostDto) {
    return this.biddingPostService.create(createBiddingPostDto);
  }

  @Get()
  findAll() {
    return this.biddingPostService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingPostService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingPostDto: UpdateBiddingPostDto) {
    return this.biddingPostService.update(+id, updateBiddingPostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingPostService.remove(+id);
  }
}
