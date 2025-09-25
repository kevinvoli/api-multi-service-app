import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingDriverServiceService } from './bidding-driver-service.service';
import { CreateBiddingDriverServiceDto } from './dto/create-bidding-driver-service.dto';
import { UpdateBiddingDriverServiceDto } from './dto/update-bidding-driver-service.dto';

@Controller('bidding-driver-service')
export class BiddingDriverServiceController {
  constructor(private readonly biddingDriverServiceService: BiddingDriverServiceService) {}

  @Post()
  create(@Body() createBiddingDriverServiceDto: CreateBiddingDriverServiceDto) {
    return this.biddingDriverServiceService.create(createBiddingDriverServiceDto);
  }

  @Get()
  findAll() {
    return this.biddingDriverServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingDriverServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingDriverServiceDto: UpdateBiddingDriverServiceDto) {
    return this.biddingDriverServiceService.update(+id, updateBiddingDriverServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingDriverServiceService.remove(+id);
  }
}
