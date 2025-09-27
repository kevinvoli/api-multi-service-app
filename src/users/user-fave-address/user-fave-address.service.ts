import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserFaveAddressDto } from './dto/create-user-fave-address.dto';
import { UpdateUserFaveAddressDto } from './dto/update-user-fave-address.dto';
import { UserFaveAddress } from './entities/user-fave-address.entity';

@Injectable()
export class UserFaveAddressService {
  constructor(
    @InjectRepository(UserFaveAddress)
    private readonly userFaveAddressRepository: Repository<UserFaveAddress>,
  ) {}
  async create(createUserFaveAddressDto: CreateUserFaveAddressDto): Promise<UserFaveAddress> {
    const newFaveAddress = this.userFaveAddressRepository.create({
      ...createUserFaveAddressDto,
      dAddedDate: new Date(),
    });
    return await this.userFaveAddressRepository.save(newFaveAddress);
  }

  async findAll(): Promise<UserFaveAddress[]> {
    return await this.userFaveAddressRepository.find();
  }

  async findOne(id: number): Promise<UserFaveAddress> {
    const faveAddress = await this.userFaveAddressRepository.findOne({ where: { iUserFavAddressId: id } });
    if (!faveAddress) {
      throw new NotFoundException(`Favorite address with ID "${id}" not found`);
    }
    return faveAddress;
  }

  async update(id: number, updateUserFaveAddressDto: UpdateUserFaveAddressDto): Promise<UserFaveAddress> {
    const faveAddress = await this.userFaveAddressRepository.preload({
      iUserFavAddressId: id,
      ...updateUserFaveAddressDto,
    });
    if (!faveAddress) {
      throw new NotFoundException(`Favorite address with ID "${id}" not found`);
    }
    return await this.userFaveAddressRepository.save(faveAddress);
  }

  async remove(id: number): Promise<UserFaveAddress> {
    const faveAddress = await this.findOne(id);
    return await this.userFaveAddressRepository.remove(faveAddress);
  }
}
