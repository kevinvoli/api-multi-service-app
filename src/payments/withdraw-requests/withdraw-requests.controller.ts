import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { WithdrawRequestsService } from './withdraw-requests.service';
import { CreateWithdrawRequestDto } from './dto/create-withdraw-request.dto';
import { UpdateWithdrawRequestDto } from './dto/update-withdraw-request.dto';
import { WithdrawRequests } from './entities/withdraw-request.entity';

@Controller('withdraw-requests')
export class WithdrawRequestsController {
  constructor(private readonly withdrawRequestsService: WithdrawRequestsService) {}

  @Post()
  async create(@Body() createWithdrawRequestDto: CreateWithdrawRequestDto): Promise<WithdrawRequests> {
    return this.withdrawRequestsService.create(createWithdrawRequestDto);
  }

  @Get()
  async findAll(): Promise<WithdrawRequests[]> {
    return this.withdrawRequestsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<WithdrawRequests> {
    return this.withdrawRequestsService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateWithdrawRequestDto: UpdateWithdrawRequestDto): Promise<WithdrawRequests> {
    return this.withdrawRequestsService.update(id, updateWithdrawRequestDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.withdrawRequestsService.remove(id);
  }
}