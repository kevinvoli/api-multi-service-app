import { Injectable } from '@nestjs/common';
import { CreateDriverServicesVideoConsultChargeDto } from './dto/create-driver-services-video-consult-charge.dto';
import { UpdateDriverServicesVideoConsultChargeDto } from './dto/update-driver-services-video-consult-charge.dto';

@Injectable()
export class DriverServicesVideoConsultChargesService {
  create(createDriverServicesVideoConsultChargeDto: CreateDriverServicesVideoConsultChargeDto) {
    return 'This action adds a new driverServicesVideoConsultCharge';
  }

  findAll() {
    return `This action returns all driverServicesVideoConsultCharges`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverServicesVideoConsultCharge`;
  }

  update(id: number, updateDriverServicesVideoConsultChargeDto: UpdateDriverServicesVideoConsultChargeDto) {
    return `This action updates a #${id} driverServicesVideoConsultCharge`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverServicesVideoConsultCharge`;
  }
}
