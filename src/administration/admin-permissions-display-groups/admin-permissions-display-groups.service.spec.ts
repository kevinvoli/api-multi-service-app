import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsDisplayGroupsService } from './admin-permissions-display-groups.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminPermissionDisplayGroups } from './entities/admin-permissions-display-group.entity';
import { Repository } from 'typeorm';
import { CreateAdminPermissionsDisplayGroupDto } from './dto/create-admin-permissions-display-group.dto';
import { UpdateAdminPermissionsDisplayGroupDto } from './dto/update-admin-permissions-display-group.dto';
import { NotFoundException } from '@nestjs/common';

describe('AdminPermissionsDisplayGroupsService', () => {
  let service: AdminPermissionsDisplayGroupsService;
  let repository: Repository<AdminPermissionDisplayGroups>;

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
        AdminPermissionsDisplayGroupsService,
        {
          provide: getRepositoryToken(AdminPermissionDisplayGroups),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdminPermissionsDisplayGroupsService>(AdminPermissionsDisplayGroupsService);
    repository = module.get<Repository<AdminPermissionDisplayGroups>>(getRepositoryToken(AdminPermissionDisplayGroups));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new display group', async () => {
      const createDto: CreateAdminPermissionsDisplayGroupDto = { name: 'Test Group' };
      const newGroup = { id: 1, ...createDto };

      mockRepository.create.mockReturnValue(newGroup);
      mockRepository.save.mockResolvedValue(newGroup);

      expect(await service.create(createDto)).toEqual(newGroup);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(newGroup);
    });
  });

  describe('findAll', () => {
    it('should return an array of display groups', async () => {
      const groups = [{ id: 1, name: 'Test Group' }];
      mockRepository.find.mockResolvedValue(groups);
      expect(await service.findAll()).toEqual(groups);
    });
  });

  describe('findOne', () => {
    it('should return a single display group', async () => {
      const group = { id: 1, name: 'Test Group' };
      mockRepository.findOne.mockResolvedValue(group);
      expect(await service.findOne(1)).toEqual(group);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw a NotFoundException if group is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a display group', async () => {
      const updateDto: UpdateAdminPermissionsDisplayGroupDto = { name: 'Updated Group' };
      const updatedGroup = { id: 1, name: 'Updated Group' };

      mockRepository.preload.mockResolvedValue(updatedGroup);
      mockRepository.save.mockResolvedValue(updatedGroup);

      expect(await service.update(1, updateDto)).toEqual(updatedGroup);
      expect(repository.preload).toHaveBeenCalledWith({ id: 1, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedGroup);
    });

    it('should throw a NotFoundException if group to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a display group', async () => {
      const existingGroup = { id: 1, name: 'Test Group' };
      jest.spyOn(service, 'findOne').mockResolvedValue(existingGroup as any);
      mockRepository.remove.mockResolvedValue(existingGroup as any);

      expect(await service.remove(1)).toEqual({ message: `Display Group with ID #1 has been removed` });
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(repository.remove).toHaveBeenCalledWith(existingGroup);
    });
  });
});