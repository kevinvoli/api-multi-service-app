import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
  ) {}
  async create(createUserProfileDto: CreateUserProfileDto): Promise<UserProfile> {
    const userProfile = this.userProfileRepository.create(createUserProfileDto);
    return await this.userProfileRepository.save(userProfile);
  }

  async findAll(): Promise<UserProfile[]> {
    return await this.userProfileRepository.find();
  }

  async findOne(id: number): Promise<UserProfile> {
    const userProfile = await this.userProfileRepository.findOne({ where: { iUserProfileId: id } });
    if (!userProfile) {
      throw new NotFoundException(`User profile with ID "${id}" not found`);
    }
    return userProfile;
  }

  async update(id: number, updateUserProfileDto: UpdateUserProfileDto): Promise<UserProfile> {
    const userProfile = await this.userProfileRepository.preload({
      iUserProfileId: id,
      ...updateUserProfileDto,
    });
    if (!userProfile) {
      throw new NotFoundException(`User profile with ID "${id}" not found`);
    }
    return await this.userProfileRepository.save(userProfile);
  }

  async remove(id: number): Promise<UserProfile> {
    const userProfile = await this.findOne(id);
    return await this.userProfileRepository.remove(userProfile);
  }
}
