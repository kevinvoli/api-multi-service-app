import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserEmergencyContactDto } from './dto/create-user-emergency-contact.dto';
import { UpdateUserEmergencyContactDto } from './dto/update-user-emergency-contact.dto';
import { UserEmergencyContact } from './entities/user-emergency-contact.entity';

@Injectable()
export class UserEmergencyContactService {
  constructor(
    @InjectRepository(UserEmergencyContact)
    private readonly userEmergencyContactRepository: Repository<UserEmergencyContact>,
  ) {}
  async create(createUserEmergencyContactDto: CreateUserEmergencyContactDto): Promise<UserEmergencyContact> {
    const newContact = this.userEmergencyContactRepository.create(createUserEmergencyContactDto);
    return await this.userEmergencyContactRepository.save(newContact);
  }

  async findAll(): Promise<UserEmergencyContact[]> {
    return await this.userEmergencyContactRepository.find();
  }

  async findOne(id: number): Promise<UserEmergencyContact> {
    const contact = await this.userEmergencyContactRepository.findOne({ where: { iEmergencyId: id } });
    if (!contact) {
      throw new NotFoundException(`Emergency contact with ID "${id}" not found`);
    }
    return contact;
  }

  async update(id: number, updateUserEmergencyContactDto: UpdateUserEmergencyContactDto): Promise<UserEmergencyContact> {
    const contact = await this.userEmergencyContactRepository.preload({
      iEmergencyId: id,
      ...updateUserEmergencyContactDto,
    });
    if (!contact) {
      throw new NotFoundException(`Emergency contact with ID "${id}" not found`);
    }
    return await this.userEmergencyContactRepository.save(contact);
  }

  async remove(id: number): Promise<UserEmergencyContact> {
    const contact = await this.findOne(id);
    return await this.userEmergencyContactRepository.remove(contact);
  }
}
