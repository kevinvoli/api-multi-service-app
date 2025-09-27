import { Test, TestingModule } from '@nestjs/testing';
import { AdminLocationsService } from './admin-locations.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminLocations } from './entities/admin-location.entity';
import { Repository } from 'typeorm';
import { CreateAdminLocationDto } from './dto/create-admin-location.dto';
import { UpdateAdminLocationDto } from './dto/update-admin-location.dto';
import { NotFoundException } from '@nestjs/common';

describe('AdminLocationsService', () => {
  let service: AdminLocationsService;
  let repository: Repository<AdminLocations>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    preload: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminLocationsService,
        {
          provide: getRepositoryToken(AdminLocations),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdminLocationsService>(AdminLocationsService);
    repository = module.get<Repository<AdminLocations>>(getRepositoryToken(AdminLocations));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new assignment', async () => {
      const createDto: CreateAdminLocationDto = { adminId: 1, locationId: 1 };
      const newAssignment = { id: 1, ...createDto };

      mockRepository.create.mockReturnValue(newAssignment);
      mockRepository.save.mockResolvedValue(newAssignment);

      expect(await service.create(createDto)).toEqual(newAssignment);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(newAssignment);
    });
  });

  describe('findAll', () => {
    it('should return an array of assignments', async () => {
      const assignments = [{ id: 1, adminId: 1, locationId: 1 }];
      mockRepository.find.mockResolvedValue(assignments);
      expect(await service.findAll()).toEqual(assignments);
    });
  });

  describe('findOne', () => {
    it('should return a single assignment', async () => {
      const assignment = { id: 1, adminId: 1, locationId: 1 };
      mockRepository.findOne.mockResolvedValue(assignment);
      expect(await service.findOne(1)).toEqual(assignment);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw a NotFoundException if assignment is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update an assignment', async () => {
      const updateDto: UpdateAdminLocationDto = { adminId: 2 };
      const updatedAssignment = { id: 1, adminId: 2, locationId: 1 };

      mockRepository.preload.mockResolvedValue(updatedAssignment);
      mockRepository.save.mockResolvedValue(updatedAssignment);

      expect(await service.update(1, updateDto)).toEqual(updatedAssignment);
      expect(repository.preload).toHaveBeenCalledWith({ id: 1, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedAssignment);
    });

    it('should throw a NotFoundException if assignment to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove an assignment', async () => {
      const existingAssignment = { id: 1, adminId: 1, locationId: 1 };
      jest.spyOn(service, 'findOne').mockResolvedValue(existingAssignment as any);
      mockRepository.remove.mockResolvedValue(existingAssignment as any);

      expect(await service.remove(1)).toEqual({ message: `AdminLocation with ID #1 has been removed` });
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(repository.remove).toHaveBeenCalledWith(existingAssignment);
    });
  });
});