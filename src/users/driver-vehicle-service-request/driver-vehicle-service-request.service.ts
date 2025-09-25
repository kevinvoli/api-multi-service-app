import { Injectable } from '@nestjs/common';
import { CreateDriverVehicleServiceRequestDto } from './dto/create-driver-vehicle-service-request.dto';
import { UpdateDriverVehicleServiceRequestDto } from './dto/update-driver-vehicle-service-request.dto';

@Injectable()
export class DriverVehicleServiceRequestService {
  create(createDriverVehicleServiceRequestDto: CreateDriverVehicleServiceRequestDto) {
    return 'This action adds a new driverVehicleServiceRequest';
  }

  findAll() {
    return `This action returns all driverVehicleServiceRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverVehicleServiceRequest`;
  }

  update(id: number, updateDriverVehicleServiceRequestDto: UpdateDriverVehicleServiceRequestDto) {
    return `This action updates a #${id} driverVehicleServiceRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverVehicleServiceRequest`;
  }
}
