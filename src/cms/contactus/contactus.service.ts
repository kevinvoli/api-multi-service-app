import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';
import { Contactus } from './entities/contactus.entity';

@Injectable()
export class ContactusService {
  constructor(
    @InjectRepository(Contactus)
    private readonly contactusRepository: Repository<Contactus>,
  ) {}

  async create(createContactusDto: CreateContactusDto): Promise<Contactus> {
    const newContactus = this.contactusRepository.create(createContactusDto);
    return this.contactusRepository.save(newContactus);
  }

  async findAll(): Promise<Contactus[]> {
    return this.contactusRepository.find();
  }

  async findOne(id: number): Promise<Contactus> {
    const contactus = await this.contactusRepository.findOne({ where: { iContactusId: id } });
    if (!contactus) {
      throw new NotFoundException(`Contact us entry with ID #${id} not found`);
    }
    return contactus;
  }

  async update(id: number, updateContactusDto: UpdateContactusDto): Promise<Contactus> {
    const contactus = await this.findOne(id);
    this.contactusRepository.merge(contactus, updateContactusDto);
    return this.contactusRepository.save(contactus);
  }

  async remove(id: number): Promise<void> {
    const result = await this.contactusRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Contact us entry with ID #${id} not found`);
    }
  }
}