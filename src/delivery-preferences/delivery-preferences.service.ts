import { Injectable } from '@nestjs/common';
import { CreateDeliveryPreferenceDto } from './dto/create-delivery-preference.dto';
import { UpdateDeliveryPreferenceDto } from './dto/update-delivery-preference.dto';

@Injectable()
export class DeliveryPreferencesService {
  create(createDeliveryPreferenceDto: CreateDeliveryPreferenceDto) {
    return 'This action adds a new deliveryPreference';
  }

  findAll() {
    return `This action returns all deliveryPreferences`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryPreference`;
  }

  update(id: number, updateDeliveryPreferenceDto: UpdateDeliveryPreferenceDto) {
    return `This action updates a #${id} deliveryPreference`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryPreference`;
  }
}
