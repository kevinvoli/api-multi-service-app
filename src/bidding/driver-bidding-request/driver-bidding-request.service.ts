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
    private readonly requestRepository: Repository<DriverBiddingRequest>,
  ) {}

  create(createDriverBiddingRequestDto: CreateDriverBiddingRequestDto): Promise<DriverBiddingRequest> {
    const newRequest = this.requestRepository.create(createDriverBiddingRequestDto);
    return this.requestRepository.save(newRequest);
  }

  findAll(): Promise<DriverBiddingRequest[]> {
    return this.requestRepository.find();
  }

  async findOne(id: number): Promise<DriverBiddingRequest> {
    const request = await this.requestRepository.findOne({ where: { iRequestId: id } });
    if (!request) {
      throw new NotFoundException(`DriverBiddingRequest with ID #${id} not found`);
    }
    return request;
  }

  async update(id: number, updateDriverBiddingRequestDto: UpdateDriverBiddingRequestDto): Promise<DriverBiddingRequest> {
    const request = await this.requestRepository.preload({
      iRequestId: id,
      ...updateDriverBiddingRequestDto,
    });
    if (!request) {
      throw new NotFoundException(`DriverBiddingRequest with ID #${id} not found`);
    }
    return this.requestRepository.save(request);
  }

  async remove(id: number): Promise<void> {
    const result = await this.requestRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`DriverBiddingRequest with ID #${id} not found`);
    }
  }
}