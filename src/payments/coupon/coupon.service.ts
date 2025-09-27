import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Coupon } from './entities/coupon.entity';

@Injectable()
export class CouponService {
  constructor(
    @InjectRepository(Coupon)
    private readonly couponRepository: Repository<Coupon>,
  ) {}

  async create(createCouponDto: CreateCouponDto): Promise<Coupon> {
    const coupon = this.couponRepository.create(createCouponDto);
    return this.couponRepository.save(coupon);
  }

  async findAll(): Promise<Coupon[]> {
    return this.couponRepository.find();
  }

  async findOne(id: number): Promise<Coupon> {
    const coupon = await this.couponRepository.findOne({ where: { iCouponId: id } });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID #${id} not found`);
    }
    return coupon;
  }

  async update(id: number, updateCouponDto: UpdateCouponDto): Promise<Coupon> {
    const coupon = await this.couponRepository.preload({
      iCouponId: id,
      ...updateCouponDto,
    });
    if (!coupon) {
      throw new NotFoundException(`Coupon with ID #${id} not found`);
    }
    return this.couponRepository.save(coupon);
  }

  async remove(id: number): Promise<void> {
    const result = await this.couponRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Coupon with ID #${id} not found`);
    }
  }
}