import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DriverBiddingRequest } from './entities/driver-bidding-request.entity';
import { CreateDriverBiddingRequestDto } from './dto/create-driver-bidding-request.dto';
import { UpdateDriverBiddingRequestDto } from './dto/update-driver-bidding-request.dto';

@Injectable()
export class DriverBiddingRequestService {
  constructor(
    @InjectRepository(DriverBiddingRequest)
    private readonly repository: Repository<DriverBiddingRequest>,
  ) {}

  async create(createDto: CreateDriverBiddingRequestDto): Promise<DriverBiddingRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<DriverBiddingRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<DriverBiddingRequest> {
    const entity = await this.repository.findOneBy({ iRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateDriverBiddingRequestDto): Promise<DriverBiddingRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
