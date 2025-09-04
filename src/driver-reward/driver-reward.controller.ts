import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverRewardService } from './driver-reward.service';
import { CreateDriverRewardDto } from './dto/create-driver-reward.dto';
import { UpdateDriverRewardDto } from './dto/update-driver-reward.dto';

@Controller('driver-reward')
export class DriverRewardController {
  constructor(private readonly driverRewardService: DriverRewardService) {}

  @Post()
  create(@Body() createDriverRewardDto: CreateDriverRewardDto) {
    return this.driverRewardService.create(createDriverRewardDto);
  }

  @Get()
  findAll() {
    return this.driverRewardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverRewardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverRewardDto: UpdateDriverRewardDto) {
    return this.driverRewardService.update(+id, updateDriverRewardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverRewardService.remove(+id);
  }
}
