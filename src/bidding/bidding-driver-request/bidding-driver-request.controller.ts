import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingDriverRequestService } from './bidding-driver-request.service';
import { CreateBiddingDriverRequestDto } from './dto/create-bidding-driver-request.dto';
import { UpdateBiddingDriverRequestDto } from './dto/update-bidding-driver-request.dto';

@Controller('bidding-driver-request')
export class BiddingDriverRequestController {
  constructor(private readonly biddingDriverRequestService: BiddingDriverRequestService) {}

  @Post()
  create(@Body() createBiddingDriverRequestDto: CreateBiddingDriverRequestDto) {
    return this.biddingDriverRequestService.create(createBiddingDriverRequestDto);
  }

  @Get()
  findAll() {
    return this.biddingDriverRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingDriverRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingDriverRequestDto: UpdateBiddingDriverRequestDto) {
    return this.biddingDriverRequestService.update(+id, updateBiddingDriverRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingDriverRequestService.remove(+id);
  }
}
