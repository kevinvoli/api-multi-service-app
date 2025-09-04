import { Injectable } from '@nestjs/common';
import { CreateUserEmergencyContactDto } from './dto/create-user-emergency-contact.dto';
import { UpdateUserEmergencyContactDto } from './dto/update-user-emergency-contact.dto';

@Injectable()
export class UserEmergencyContactService {
  create(createUserEmergencyContactDto: CreateUserEmergencyContactDto) {
    return 'This action adds a new userEmergencyContact';
  }

  findAll() {
    return `This action returns all userEmergencyContact`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userEmergencyContact`;
  }

  update(id: number, updateUserEmergencyContactDto: UpdateUserEmergencyContactDto) {
    return `This action updates a #${id} userEmergencyContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} userEmergencyContact`;
  }
}
