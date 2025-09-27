import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserAddressDto } from './dto/create-user-address.dto';
import { UpdateUserAddressDto } from './dto/update-user-address.dto';
import { UserAddress } from './entities/user-address.entity';

@Injectable()
export class UserAddressService {
  constructor(
    @InjectRepository(UserAddress)
    private readonly userAddressRepository: Repository<UserAddress>,
  ) {}
  async create(createUserAddressDto: CreateUserAddressDto): Promise<UserAddress> {
    const newUserAddress = this.userAddressRepository.create({
      ...createUserAddressDto,
      dAddedDate: new Date(),
    });
    return await this.userAddressRepository.save(newUserAddress);
  }

  async findAll(): Promise<UserAddress[]> {
    return await this.userAddressRepository.find();
  }

  async findOne(id: number): Promise<UserAddress> {
    const userAddress = await this.userAddressRepository.findOne({ where: { iUserAddressId: id } });
    if (!userAddress) {
      throw new NotFoundException(`User address with ID "${id}" not found`);
    }
    return userAddress;
  }

  async update(id: number, updateUserAddressDto: UpdateUserAddressDto): Promise<UserAddress> {
    const userAddress = await this.userAddressRepository.preload({
      iUserAddressId: id,
      ...updateUserAddressDto,
    });
    if (!userAddress) {
      throw new NotFoundException(`User address with ID "${id}" not found`);
    }
    return await this.userAddressRepository.save(userAddress);
  }

  async remove(id: number): Promise<UserAddress> {
    const userAddress = await this.findOne(id);
    return await this.userAddressRepository.remove(userAddress);
  }
}
