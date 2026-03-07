import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AirportsurchargeFare } from './entities/airportsurcharge-fare.entity';
import { CreateAirportsurchargeFareDto } from './dto/create-airportsurcharge-fare.dto';
import { UpdateAirportsurchargeFareDto } from './dto/update-airportsurcharge-fare.dto';

@Injectable()
export class AirportsurchargeFareService {
  constructor(
    @InjectRepository(AirportsurchargeFare)
    private readonly repository: Repository<AirportsurchargeFare>,
  ) {}

  async create(createDto: CreateAirportsurchargeFareDto): Promise<AirportsurchargeFare> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<AirportsurchargeFare[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<AirportsurchargeFare> {
    const entity = await this.repository.findOneBy({ iLocatioId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateAirportsurchargeFareDto): Promise<AirportsurchargeFare> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
