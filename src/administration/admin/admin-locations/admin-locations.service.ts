import { Injectable } from '@nestjs/common';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';

@Injectable()
export class AdminLocationsService {
  create(createAdminLocationDto: CreateAdminLocationDto) {
    return 'This action adds a new adminLocation';
  }

  findAll() {
    return `This action returns all adminLocations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adminLocation`;
  }

  update(id: number, updateAdminLocationDto: UpdateAdminLocationDto) {
    return `This action updates a #${id} adminLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} adminLocation`;
  }
}
