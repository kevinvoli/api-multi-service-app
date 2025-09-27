import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverFavoriteDto } from './dto/create-driver-favorite.dto';
import { UpdateDriverFavoriteDto } from './dto/update-driver-favorite.dto';
import { DriverFavorites } from './entities/driver-favorite.entity';

@Injectable()
export class DriverFavoritesService {
  constructor(
    @InjectRepository(DriverFavorites)
    private readonly driverFavoritesRepository: Repository<DriverFavorites>,
  ) {}
  async create(createDriverFavoriteDto: CreateDriverFavoriteDto): Promise<DriverFavorites> {
    const newFavorite = this.driverFavoritesRepository.create(createDriverFavoriteDto);
    return await this.driverFavoritesRepository.save(newFavorite);
  }

  async findAll(): Promise<DriverFavorites[]> {
    return await this.driverFavoritesRepository.find();
  }

  async findOne(id: number): Promise<DriverFavorites> {
    const favorite = await this.driverFavoritesRepository.findOne({ where: { iDriverFavorite: id } });
    if (!favorite) {
      throw new NotFoundException(`Favorite with ID "${id}" not found`);
    }
    return favorite;
  }

  async update(id: number, updateDriverFavoriteDto: UpdateDriverFavoriteDto): Promise<DriverFavorites> {
    const favorite = await this.driverFavoritesRepository.preload({
      iDriverFavorite: id,
      ...updateDriverFavoriteDto,
    });
    if (!favorite) {
      throw new NotFoundException(`Favorite with ID "${id}" not found`);
    }
    return await this.driverFavoritesRepository.save(favorite);
  }

  async remove(id: number): Promise<DriverFavorites> {
    const favorite = await this.findOne(id);
    return await this.driverFavoritesRepository.remove(favorite);
  }
}
