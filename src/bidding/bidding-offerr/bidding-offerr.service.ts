import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingOffer } from './entities/bidding-offerr.entity';
import { CreateBiddingOfferrDto } from './dto/create-bidding-offerr.dto';
import { UpdateBiddingOfferrDto } from './dto/update-bidding-offerr.dto';

@Injectable()
export class BiddingOfferrService {
  constructor(
    @InjectRepository(BiddingOffer)
    private readonly repository: Repository<BiddingOffer>,
  ) {}

  async create(createDto: CreateBiddingOfferrDto): Promise<BiddingOffer> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingOffer[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingOffer> {
    const entity = await this.repository.findOneBy({ iOfferId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingOfferrDto): Promise<BiddingOffer> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
