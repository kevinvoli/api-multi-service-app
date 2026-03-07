import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingDriverService } from './entities/bidding-driver-service.entity';
import { CreateBiddingDriverServiceDto } from './dto/create-bidding-driver-service.dto';
import { UpdateBiddingDriverServiceDto } from './dto/update-bidding-driver-service.dto';

@Injectable()
export class BiddingDriverServiceService {
  constructor(
    @InjectRepository(BiddingDriverService)
    private readonly repository: Repository<BiddingDriverService>,
  ) {}

  async create(createDto: CreateBiddingDriverServiceDto): Promise<BiddingDriverService> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingDriverService[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingDriverService> {
    const entity = await this.repository.findOneBy({ iBiddingDriverServiceId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingDriverServiceDto): Promise<BiddingDriverService> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
