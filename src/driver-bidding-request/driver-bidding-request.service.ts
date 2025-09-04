import { Injectable } from '@nestjs/common';
import { CreateDriverBiddingRequestDto } from './dto/create-driver-bidding-request.dto';
import { UpdateDriverBiddingRequestDto } from './dto/update-driver-bidding-request.dto';

@Injectable()
export class DriverBiddingRequestService {
  create(createDriverBiddingRequestDto: CreateDriverBiddingRequestDto) {
    return 'This action adds a new driverBiddingRequest';
  }

  findAll() {
    return `This action returns all driverBiddingRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverBiddingRequest`;
  }

  update(id: number, updateDriverBiddingRequestDto: UpdateDriverBiddingRequestDto) {
    return `This action updates a #${id} driverBiddingRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverBiddingRequest`;
  }
}
