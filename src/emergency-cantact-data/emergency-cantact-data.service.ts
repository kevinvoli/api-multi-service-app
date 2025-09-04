import { Injectable } from '@nestjs/common';
import { CreateEmergencyCantactDatumDto } from './dto/create-emergency-cantact-datum.dto';
import { UpdateEmergencyCantactDatumDto } from './dto/update-emergency-cantact-datum.dto';

@Injectable()
export class EmergencyCantactDataService {
  create(createEmergencyCantactDatumDto: CreateEmergencyCantactDatumDto) {
    return 'This action adds a new emergencyCantactDatum';
  }

  findAll() {
    return `This action returns all emergencyCantactData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emergencyCantactDatum`;
  }

  update(id: number, updateEmergencyCantactDatumDto: UpdateEmergencyCantactDatumDto) {
    return `This action updates a #${id} emergencyCantactDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergencyCantactDatum`;
  }
}
