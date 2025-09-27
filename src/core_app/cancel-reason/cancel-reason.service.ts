import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCancelReasonDto } from './dto/create-cancel-reason.dto';
import { UpdateCancelReasonDto } from './dto/update-cancel-reason.dto';
import { CancelReason } from './entities/cancel-reason.entity';

@Injectable()
export class CancelReasonService {
  constructor(
    @InjectRepository(CancelReason)
    private readonly cancelReasonRepository: Repository<CancelReason>,
  ) {}

  create(createCancelReasonDto: CreateCancelReasonDto): Promise<CancelReason> {
    const cancelReason = this.cancelReasonRepository.create(createCancelReasonDto);
    return this.cancelReasonRepository.save(cancelReason);
  }

  findAll(): Promise<CancelReason[]> {
    return this.cancelReasonRepository.find();
  }

  async findOne(id: number): Promise<CancelReason> {
    const cancelReason = await this.cancelReasonRepository.findOne({ where: { iCancelReasonId: id } });
    if (!cancelReason) {
      throw new NotFoundException(`CancelReason with ID #${id} not found`);
    }
    return cancelReason;
  }

  async update(id: number, updateCancelReasonDto: UpdateCancelReasonDto): Promise<CancelReason> {
    await this.findOne(id); // will throw error if not found
    await this.cancelReasonRepository.update(id, updateCancelReasonDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.cancelReasonRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`CancelReason with ID #${id} not found`);
    }
  }
}