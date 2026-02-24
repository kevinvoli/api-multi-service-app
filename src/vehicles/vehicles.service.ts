import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Driver } from './entities/driver.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Vehicle CRUD
  async createVehicle(vehicle: Partial<Vehicle>): Promise<Vehicle> {
    const newVehicle = this.vehicleRepository.create(vehicle);
    return this.vehicleRepository.save(newVehicle);
  }

  async findAllVehicles(): Promise<Vehicle[]> {
    return this.vehicleRepository.find({ relations: ['driver'] });
  }

  async findOneVehicle(id: number): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.findOne({ where: { id }, relations: ['driver'] });
    if (!vehicle) {
      throw new NotFoundException(`Vehicle with ID ${id} not found`);
    }
    return vehicle;
  }

  async updateVehicle(id: number, vehicle: Partial<Vehicle>): Promise<Vehicle> {
    await this.vehicleRepository.update(id, vehicle);
    return this.findOneVehicle(id);
  }

  async removeVehicle(id: number): Promise<void> {
    await this.vehicleRepository.delete(id);
  }

  // Driver CRUD
  async createDriver(userId: number): Promise<Driver> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    const newDriver = this.driverRepository.create({ user });
    return this.driverRepository.save(newDriver);
  }

  async findAllDrivers(): Promise<Driver[]> {
    return this.driverRepository.find({ relations: ['user', 'vehicles'] });
  }

  async findOneDriver(id: number): Promise<Driver> {
    const driver = await this.driverRepository.findOne({ where: { id }, relations: ['user', 'vehicles'] });
    if (!driver) {
      throw new NotFoundException(`Driver with ID ${id} not found`);
    }
    return driver;
  }

  async updateDriver(id: number, driver: Partial<Driver>): Promise<Driver> {
    await this.driverRepository.update(id, driver);
    return this.findOneDriver(id);
  }

  async removeDriver(id: number): Promise<void> {
    await this.driverRepository.delete(id);
  }

  async assignVehicleToDriver(vehicleId: number, driverId: number): Promise<Vehicle> {
    const vehicle = await this.findOneVehicle(vehicleId);
    const driver = await this.findOneDriver(driverId);
    vehicle.driver = driver;
    return this.vehicleRepository.save(vehicle);
  }
}
