import { Injectable } from '@nestjs/common';
import { CreateUserProfileMasterDto } from './dto/create-user-profile-master.dto';
import { UpdateUserProfileMasterDto } from './dto/update-user-profile-master.dto';

@Injectable()
export class UserProfileMasterService {
  create(createUserProfileMasterDto: CreateUserProfileMasterDto) {
    return 'This action adds a new userProfileMaster';
  }

  findAll() {
    return `This action returns all userProfileMaster`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userProfileMaster`;
  }

  update(id: number, updateUserProfileMasterDto: UpdateUserProfileMasterDto) {
    return `This action updates a #${id} userProfileMaster`;
  }

  remove(id: number) {
    return `This action removes a #${id} userProfileMaster`;
  }
}
