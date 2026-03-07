import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingDriverRequest } from './entities/bidding-driver-request.entity';
import { CreateBiddingDriverRequestDto } from './dto/create-bidding-driver-request.dto';
import { UpdateBiddingDriverRequestDto } from './dto/update-bidding-driver-request.dto';

@Injectable()
export class BiddingDriverRequestService {
  constructor(
    @InjectRepository(BiddingDriverRequest)
    private readonly repository: Repository<BiddingDriverRequest>,
  ) {}

  async create(createDto: CreateBiddingDriverRequestDto): Promise<BiddingDriverRequest> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingDriverRequest[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingDriverRequest> {
    const entity = await this.repository.findOneBy({ iRequestId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingDriverRequestDto): Promise<BiddingDriverRequest> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
