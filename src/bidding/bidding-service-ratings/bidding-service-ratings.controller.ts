import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingServiceRatingsService } from './bidding-service-ratings.service';
import { CreateBiddingServiceRatingDto } from './dto/create-bidding-service-rating.dto';
import { UpdateBiddingServiceRatingDto } from './dto/update-bidding-service-rating.dto';

@Controller('bidding-service-ratings')
export class BiddingServiceRatingsController {
  constructor(private readonly biddingServiceRatingsService: BiddingServiceRatingsService) {}

  @Post()
  create(@Body() createBiddingServiceRatingDto: CreateBiddingServiceRatingDto) {
    return this.biddingServiceRatingsService.create(createBiddingServiceRatingDto);
  }

  @Get()
  findAll() {
    return this.biddingServiceRatingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingServiceRatingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingServiceRatingDto: UpdateBiddingServiceRatingDto) {
    return this.biddingServiceRatingsService.update(+id, updateBiddingServiceRatingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingServiceRatingsService.remove(+id);
  }
}
