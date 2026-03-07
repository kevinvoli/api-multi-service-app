import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BiddingPost } from './entities/bidding-post.entity';
import { CreateBiddingPostDto } from './dto/create-bidding-post.dto';
import { UpdateBiddingPostDto } from './dto/update-bidding-post.dto';

@Injectable()
export class BiddingPostService {
  constructor(
    @InjectRepository(BiddingPost)
    private readonly repository: Repository<BiddingPost>,
  ) {}

  async create(createDto: CreateBiddingPostDto): Promise<BiddingPost> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<BiddingPost[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<BiddingPost> {
    const entity = await this.repository.findOneBy({ iBiddingPostId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateBiddingPostDto): Promise<BiddingPost> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
