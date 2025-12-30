import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateRegisterUserDto } from './dto/create-register-user.dto';
import { UpdateRegisterUserDto } from './dto/update-register-user.dto';
import { RegisterUser } from './entities/register-user.entity';

@Injectable()
export class RegisterUserService {
  constructor(
    @InjectRepository(RegisterUser)
    private readonly registerUserRepository: Repository<RegisterUser>,
  ) { }
  async create(createRegisterUserDto: CreateRegisterUserDto): Promise<Omit<RegisterUser, 'vPassword'>> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createRegisterUserDto.vPassword, salt);

    const newUser = this.registerUserRepository.create({
      ...createRegisterUserDto,
      vPassword: hashedPassword,
    });

    const savedUser = await this.registerUserRepository.save(newUser);

    const { vPassword, ...result } = savedUser;
    return result;
  }

  async findAll(
    page: number = 1,
    limit: number = 50,
    filters?: any
  ): Promise<{
    users: Omit<RegisterUser, 'vPassword'>[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    const skip = (page - 1) * limit;

    const [users, total] = await this.registerUserRepository.findAndCount({
      skip,
      take: limit,
      // where: filters ? filters : {},
      select: this.getSafeUserFields(), // Sélectionner uniquement les champs nécessaires
      order: { tRegistrationDate: 'DESC' } // Trier par date
    });

    const safeUsers = users.map(user => {
      const { vPassword, ...result } = user;
      return result;
    });

    return {
      users: safeUsers,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    };
  }

  private getSafeUserFields(): (keyof RegisterUser)[] {
    // Liste explicite des champs à retourner (exclure vPassword et autres champs sensibles)
    return [
      'iUserId', 'vName', 'vLastName', 'vEmail', 'vPhone',
      'eStatus', 'tRegistrationDate', 'eGender', 'vCountry',
      'vAvgRating', 'eEmailVerified', 'ePhoneVerified',
      'tLastOnline', 'vImgName', 'eDeviceType'
    ];
  }

  async findOne(id: number): Promise<Omit<RegisterUser, 'vPassword'>> {
    const user = await this.registerUserRepository.findOne({ where: { iUserId: id } });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }
    const { vPassword, ...result } = user;
    return result;
  }

  async update(id: number, updateRegisterUserDto: UpdateRegisterUserDto): Promise<Omit<RegisterUser, 'vPassword'>> {
    if (updateRegisterUserDto.vPassword) {
      const salt = await bcrypt.genSalt();
      updateRegisterUserDto.vPassword = await bcrypt.hash(updateRegisterUserDto.vPassword, salt);
    }

    const user = await this.registerUserRepository.preload({
      iUserId: id,
      ...updateRegisterUserDto,
    });

    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    const updatedUser = await this.registerUserRepository.save(user);
    const { vPassword, ...result } = updatedUser;
    return result;
  }

  async remove(id: number): Promise<Omit<RegisterUser, 'vPassword'>> {
    const user = await this.registerUserRepository.findOne({ where: { iUserId: id } });
    if (!user) {
      throw new NotFoundException(`User with ID "${id}" not found`);
    }

    user.eStatus = 'Deleted';
    const deletedUser = await this.registerUserRepository.save(user);

    const { vPassword, ...result } = deletedUser;
    return result;
  }
}
