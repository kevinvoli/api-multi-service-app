import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserPaymentInfoDto } from './dto/create-user-payment-info.dto';
import { UpdateUserPaymentInfoDto } from './dto/update-user-payment-info.dto';
import { UserPaymentInfo } from './entities/user-payment-info.entity';

@Injectable()
export class UserPaymentInfoService {
  constructor(
    @InjectRepository(UserPaymentInfo)
    private readonly userPaymentInfoRepository: Repository<UserPaymentInfo>,
  ) {}
  async create(createUserPaymentInfoDto: CreateUserPaymentInfoDto): Promise<UserPaymentInfo> {
    const newPaymentInfo = this.userPaymentInfoRepository.create(createUserPaymentInfoDto);
    return await this.userPaymentInfoRepository.save(newPaymentInfo);
  }

  async findAll(): Promise<UserPaymentInfo[]> {
    return await this.userPaymentInfoRepository.find();
  }

  async findOne(id: number): Promise<UserPaymentInfo> {
    const paymentInfo = await this.userPaymentInfoRepository.findOne({ where: { iPaymentInfoId: id } });
    if (!paymentInfo) {
      throw new NotFoundException(`Payment info with ID "${id}" not found`);
    }
    return paymentInfo;
  }

  async update(id: number, updateUserPaymentInfoDto: UpdateUserPaymentInfoDto): Promise<UserPaymentInfo> {
    const paymentInfo = await this.userPaymentInfoRepository.preload({
      iPaymentInfoId: id,
      ...updateUserPaymentInfoDto,
    });
    if (!paymentInfo) {
      throw new NotFoundException(`Payment info with ID "${id}" not found`);
    }
    return await this.userPaymentInfoRepository.save(paymentInfo);
  }

  async remove(id: number): Promise<UserPaymentInfo> {
    const paymentInfo = await this.findOne(id);
    return await this.userPaymentInfoRepository.remove(paymentInfo);
  }
}
