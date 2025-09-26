import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVisitAdressDto } from './dto/create-visit-adress.dto';
import { UpdateVisitAdressDto } from './dto/update-visit-adress.dto';
import { VisitAddress } from './entities/visit-adress.entity';

@Injectable()
export class VisitAdressService {
  constructor(
    @InjectRepository(VisitAddress)
    private readonly visitAddressRepository: Repository<VisitAddress>,
  ) {}

  async create(createDto: CreateVisitAdressDto): Promise<VisitAddress> {
    const visitAddress = this.visitAddressRepository.create(createDto);
    return await this.visitAddressRepository.save(visitAddress);
  }

  async findAll(): Promise<VisitAddress[]> {
    return await this.visitAddressRepository.find();
  }

  async findOne(id: number): Promise<VisitAddress> {
    const visitAddress = await this.visitAddressRepository.findOneBy({ iVisitId: id });
    if (!visitAddress) {
      throw new NotFoundException(`VisitAddress with ID #${id} not found`);
    }
    return visitAddress;
  }

  async update(id: number, updateDto: UpdateVisitAdressDto): Promise<VisitAddress> {
    const visitAddress = await this.visitAddressRepository.preload({
      iVisitId: id,
      ...updateDto,
    });
    if (!visitAddress) {
      throw new NotFoundException(`VisitAddress with ID #${id} not found`);
    }
    return await this.visitAddressRepository.save(visitAddress);
  }

  async remove(id: number): Promise<VisitAddress> {
    const visitAddress = await this.findOne(id);
    await this.visitAddressRepository.remove(visitAddress);
    return visitAddress;
  }
}