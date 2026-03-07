import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserFaveAddress } from './entities/user-fave-address.entity';
import { CreateUserFaveAddressDto } from './dto/create-user-fave-address.dto';
import { UpdateUserFaveAddressDto } from './dto/update-user-fave-address.dto';

@Injectable()
export class UserFaveAddressService {
  constructor(
    @InjectRepository(UserFaveAddress)
    private readonly repository: Repository<UserFaveAddress>,
  ) {}

  async create(createDto: CreateUserFaveAddressDto): Promise<UserFaveAddress> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<UserFaveAddress[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<UserFaveAddress> {
    const entity = await this.repository.findOneBy({ iUserFavAddressId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateUserFaveAddressDto): Promise<UserFaveAddress> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
