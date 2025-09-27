import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpCode } from '@nestjs/common';
import { DriverBiddingRequestService } from './driver-bidding-request.service';
import { CreateDriverBiddingRequestDto } from './dto/create-driver-bidding-request.dto';
import { UpdateDriverBiddingRequestDto } from './dto/update-driver-bidding-request.dto';

@Controller('driver-bidding-request')
export class DriverBiddingRequestController {
  constructor(private readonly driverBiddingRequestService: DriverBiddingRequestService) {}

  @Post()
  create(@Body() createDriverBiddingRequestDto: CreateDriverBiddingRequestDto) {
    return this.driverBiddingRequestService.create(createDriverBiddingRequestDto);
  }

  @Get()
  findAll() {
    return this.driverBiddingRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.driverBiddingRequestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDriverBiddingRequestDto: UpdateDriverBiddingRequestDto) {
    return this.driverBiddingRequestService.update(id, updateDriverBiddingRequestDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.driverBiddingRequestService.remove(id);
  }
}