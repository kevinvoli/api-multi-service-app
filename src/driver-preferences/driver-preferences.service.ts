import { Injectable } from '@nestjs/common';
import { CreateDriverPreferenceDto } from './dto/create-driver-preference.dto';
import { UpdateDriverPreferenceDto } from './dto/update-driver-preference.dto';

@Injectable()
export class DriverPreferencesService {
  create(createDriverPreferenceDto: CreateDriverPreferenceDto) {
    return 'This action adds a new driverPreference';
  }

  findAll() {
    return `This action returns all driverPreferences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverPreference`;
  }

  update(id: number, updateDriverPreferenceDto: UpdateDriverPreferenceDto) {
    return `This action updates a #${id} driverPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverPreference`;
  }
}
