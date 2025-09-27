import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileMasterDto } from './dto/create-user-profile-master.dto';
import { UpdateUserProfileMasterDto } from './dto/update-user-profile-master.dto';
import { UserProfileMaster } from './entities/user-profile-master.entity';

@Injectable()
export class UserProfileMasterService {
  constructor(
    @InjectRepository(UserProfileMaster)
    private readonly userProfileMasterRepository: Repository<UserProfileMaster>,
  ) {}
  async create(createUserProfileMasterDto: CreateUserProfileMasterDto): Promise<UserProfileMaster> {
    const newProfileMaster = this.userProfileMasterRepository.create(createUserProfileMasterDto);
    return await this.userProfileMasterRepository.save(newProfileMaster);
  }

  async findAll(): Promise<UserProfileMaster[]> {
    return await this.userProfileMasterRepository.find();
  }

  async findOne(id: number): Promise<UserProfileMaster> {
    const profileMaster = await this.userProfileMasterRepository.findOne({ where: { iUserProfileMasterId: id } });
    if (!profileMaster) {
      throw new NotFoundException(`User profile master with ID "${id}" not found`);
    }
    return profileMaster;
  }

  async update(id: number, updateUserProfileMasterDto: UpdateUserProfileMasterDto): Promise<UserProfileMaster> {
    const profileMaster = await this.userProfileMasterRepository.preload({
      iUserProfileMasterId: id,
      ...updateUserProfileMasterDto,
    });
    if (!profileMaster) {
      throw new NotFoundException(`User profile master with ID "${id}" not found`);
    }
    return this.userProfileMasterRepository.save(profileMaster);
  }

  async remove(id: number): Promise<UserProfileMaster> {
    const profileMaster = await this.findOne(id);
    profileMaster.eStatus = 'Deleted';
    return await this.userProfileMasterRepository.save(profileMaster);
  }
}
