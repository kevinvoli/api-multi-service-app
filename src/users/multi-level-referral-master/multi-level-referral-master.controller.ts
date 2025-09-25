import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MultiLevelReferralMasterService } from './multi-level-referral-master.service';
import { CreateMultiLevelReferralMasterDto } from './dto/create-multi-level-referral-master.dto';
import { UpdateMultiLevelReferralMasterDto } from './dto/update-multi-level-referral-master.dto';

@Controller('multi-level-referral-master')
export class MultiLevelReferralMasterController {
  constructor(private readonly multiLevelReferralMasterService: MultiLevelReferralMasterService) {}

  @Post()
  create(@Body() createMultiLevelReferralMasterDto: CreateMultiLevelReferralMasterDto) {
    return this.multiLevelReferralMasterService.create(createMultiLevelReferralMasterDto);
  }

  @Get()
  findAll() {
    return this.multiLevelReferralMasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multiLevelReferralMasterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMultiLevelReferralMasterDto: UpdateMultiLevelReferralMasterDto) {
    return this.multiLevelReferralMasterService.update(+id, updateMultiLevelReferralMasterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multiLevelReferralMasterService.remove(+id);
  }
}
