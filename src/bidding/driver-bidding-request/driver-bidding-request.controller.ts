import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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
  findOne(@Param('id') id: string) {
    return this.driverBiddingRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverBiddingRequestDto: UpdateDriverBiddingRequestDto) {
    return this.driverBiddingRequestService.update(+id, updateDriverBiddingRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverBiddingRequestService.remove(+id);
  }
}
