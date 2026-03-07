import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contactus } from './entities/contactus.entity';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';

@Injectable()
export class ContactusService {
  constructor(
    @InjectRepository(Contactus)
    private readonly repository: Repository<Contactus>,
  ) {}

  async create(createDto: CreateContactusDto): Promise<Contactus> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async findAll(): Promise<Contactus[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Contactus> {
    const entity = await this.repository.findOneBy({ iContactusId: id } as any);
    if (!entity) throw new NotFoundException(`Record #${id} not found`);
    return entity;
  }

  async update(id: number, updateDto: UpdateContactusDto): Promise<Contactus> {
    await this.repository.update(id, updateDto as any);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
