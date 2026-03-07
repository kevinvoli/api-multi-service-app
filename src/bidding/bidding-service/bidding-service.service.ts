import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingService } from './entities/bidding-service.entity';
import { CreateBiddingServiceDto } from './dto/create-bidding-service.dto';
import { UpdateBiddingServiceDto } from './dto/update-bidding-service.dto';

@Injectable()
export class BiddingServiceService {
  constructor(
    @InjectRepository(BiddingService)
    private readonly repository: Repository<BiddingService>,
  ) {}

  async create(createDto: CreateBiddingServiceDto): Promise<BiddingService> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingService[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingService> {
    const entity = await this.repository.findOneBy({ iBiddingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingServiceDto): Promise<BiddingService> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
