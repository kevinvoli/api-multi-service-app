import { Injectable } from '@nestjs/common';
import { CreateDriverRewardDto } from './dto/create-driver-reward.dto';
import { UpdateDriverRewardDto } from './dto/update-driver-reward.dto';

@Injectable()
export class DriverRewardService {
  create(createDriverRewardDto: CreateDriverRewardDto) {
    return 'This action adds a new driverReward';
  }

  findAll() {
    return `This action returns all driverReward`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverReward`;
  }

  update(id: number, updateDriverRewardDto: UpdateDriverRewardDto) {
    return `This action updates a #${id} driverReward`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverReward`;
  }
}
