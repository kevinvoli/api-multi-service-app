import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WithdrawRequestsService } from './withdraw-requests.service';
import { CreateWithdrawRequestDto } from './dto/create-withdraw-request.dto';
import { UpdateWithdrawRequestDto } from './dto/update-withdraw-request.dto';

@Controller('withdraw-requests')
export class WithdrawRequestsController {
  constructor(private readonly withdrawRequestsService: WithdrawRequestsService) {}

  @Post()
  create(@Body() createWithdrawRequestDto: CreateWithdrawRequestDto) {
    return this.withdrawRequestsService.create(createWithdrawRequestDto);
  }

  @Get()
  findAll() {
    return this.withdrawRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.withdrawRequestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWithdrawRequestDto: UpdateWithdrawRequestDto) {
    return this.withdrawRequestsService.update(+id, updateWithdrawRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.withdrawRequestsService.remove(+id);
  }
}
