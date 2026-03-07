import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CabBooking } from './entities/cab-booking.entity';
import { CreateCabBookingDto } from './dto/create-cab-booking.dto';
import { UpdateCabBookingDto } from './dto/update-cab-booking.dto';

@Injectable()
export class CabBookingService {
  constructor(
    @InjectRepository(CabBooking)
    private readonly repository: Repository<CabBooking>,
  ) {}

  async create(createDto: CreateCabBookingDto): Promise<CabBooking> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<CabBooking[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CabBooking> {
    const entity = await this.repository.findOneBy({ iCabBookingId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateCabBookingDto): Promise<CabBooking> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
