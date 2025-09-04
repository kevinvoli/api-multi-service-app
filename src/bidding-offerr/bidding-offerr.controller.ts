import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiddingOfferrService } from './bidding-offerr.service';
import { CreateBiddingOfferrDto } from './dto/create-bidding-offerr.dto';
import { UpdateBiddingOfferrDto } from './dto/update-bidding-offerr.dto';

@Controller('bidding-offerr')
export class BiddingOfferrController {
  constructor(private readonly biddingOfferrService: BiddingOfferrService) {}

  @Post()
  create(@Body() createBiddingOfferrDto: CreateBiddingOfferrDto) {
    return this.biddingOfferrService.create(createBiddingOfferrDto);
  }

  @Get()
  findAll() {
    return this.biddingOfferrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biddingOfferrService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiddingOfferrDto: UpdateBiddingOfferrDto) {
    return this.biddingOfferrService.update(+id, updateBiddingOfferrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biddingOfferrService.remove(+id);
  }
}
