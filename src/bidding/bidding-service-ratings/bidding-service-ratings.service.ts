import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingServiceRatings } from './entities/bidding-service-rating.entity';
import { CreateBiddingServiceRatingDto } from './dto/create-bidding-service-rating.dto';
import { UpdateBiddingServiceRatingDto } from './dto/update-bidding-service-rating.dto';

@Injectable()
export class BiddingServiceRatingsService {
  constructor(
    @InjectRepository(BiddingServiceRatings)
    private readonly repository: Repository<BiddingServiceRatings>,
  ) {}

  async create(createDto: CreateBiddingServiceRatingDto): Promise<BiddingServiceRatings> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingServiceRatings[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingServiceRatings> {
    const entity = await this.repository.findOneBy({ iRatingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingServiceRatingDto): Promise<BiddingServiceRatings> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
