import { Injectable } from '@nestjs/common';
import { CreateLocationMasterDto } from './dto/create-location-master.dto';
import { UpdateLocationMasterDto } from './dto/update-location-master.dto';

@Injectable()
export class LocationMasterService {
  create(createLocationMasterDto: CreateLocationMasterDto) {
    return 'This action adds a new locationMaster';
  }

  findAll() {
    return `This action returns all locationMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationMaster`;
  }

  update(id: number, updateLocationMasterDto: UpdateLocationMasterDto) {
    return `This action updates a #${id} locationMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationMaster`;
  }
}
