import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingServiceService } from './bidding-service.service';
import { CreateBiddingServiceDto } from './dto/create-bidding-service.dto';
import { UpdateBiddingServiceDto } from './dto/update-bidding-service.dto';

@Controller('bidding-service')
export class BiddingServiceController {
  constructor(private readonly biddingServiceService: BiddingServiceService) {}

  @Post()
  create(@Body() createBiddingServiceDto: CreateBiddingServiceDto) {
    return this.biddingServiceService.create(createBiddingServiceDto);
  }

  @Get()
  findAll() {
    return this.biddingServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingServiceDto: UpdateBiddingServiceDto) {
    return this.biddingServiceService.update(+id, updateBiddingServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingServiceService.remove(+id);
  }
}
