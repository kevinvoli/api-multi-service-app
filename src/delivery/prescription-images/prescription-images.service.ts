import { Injectable } from '@nestjs/common';
import { CreatePrescriptionImageDto } from './dto/create-prescription-image.dto';
import { UpdatePrescriptionImageDto } from './dto/update-prescription-image.dto';

@Injectable()
export class PrescriptionImagesService {
  create(createPrescriptionImageDto: CreatePrescriptionImageDto) {
    return 'This action adds a new prescriptionImage';
  }

  findAll() {
    return `This action returns all prescriptionImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prescriptionImage`;
  }

  update(id: number, updatePrescriptionImageDto: UpdatePrescriptionImageDto) {
    return `This action updates a #${id} prescriptionImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescriptionImage`;
  }
}
