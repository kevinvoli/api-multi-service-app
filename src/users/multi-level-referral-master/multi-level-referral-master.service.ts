import { Injectable } from '@nestjs/common';
import { CreateMultiLevelReferralMasterDto } from './dto/create-multi-level-referral-master.dto';
import { UpdateMultiLevelReferralMasterDto } from './dto/update-multi-level-referral-master.dto';

@Injectable()
export class MultiLevelReferralMasterService {
  create(createMultiLevelReferralMasterDto: CreateMultiLevelReferralMasterDto) {
    return 'This action adds a new multiLevelReferralMaster';
  }

  findAll() {
    return `This action returns all multiLevelReferralMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} multiLevelReferralMaster`;
  }

  update(id: number, updateMultiLevelReferralMasterDto: UpdateMultiLevelReferralMasterDto) {
    return `This action updates a #${id} multiLevelReferralMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} multiLevelReferralMaster`;
  }
}
