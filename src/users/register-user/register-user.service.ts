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
  ) {}
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

  async findAll(): Promise<Omit<RegisterUser, 'vPassword'>[]> {
    const users = await this.registerUserRepository.find();
    return users.map(user => {
      const { vPassword, ...result } = user;
      return result;
    });
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
