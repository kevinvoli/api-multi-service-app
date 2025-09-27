import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './entities/coupon.entity';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) {}

  @Post()
  async create(@Body() createCouponDto: CreateCouponDto): Promise<Coupon> {
    return this.couponService.create(createCouponDto);
  }

  @Get()
  async findAll(): Promise<Coupon[]> {
    return this.couponService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Coupon> {
    return this.couponService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateCouponDto: UpdateCouponDto): Promise<Coupon> {
    return this.couponService.update(id, updateCouponDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.couponService.remove(id);
  }
}