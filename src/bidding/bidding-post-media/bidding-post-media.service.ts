import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingPostMedia } from './entities/bidding-post-media.entity';
import { CreateBiddingPostMediaDto } from './dto/create-bidding-post-media.dto';
import { UpdateBiddingPostMediaDto } from './dto/update-bidding-post-media.dto';

@Injectable()
export class BiddingPostMediaService {
  constructor(
    @InjectRepository(BiddingPostMedia)
    private readonly repository: Repository<BiddingPostMedia>,
  ) {}

  async create(createDto: CreateBiddingPostMediaDto): Promise<BiddingPostMedia> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingPostMedia[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingPostMedia> {
    const entity = await this.repository.findOneBy({ ibiddingPostMediaId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingPostMediaDto): Promise<BiddingPostMedia> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
