import { Test, TestingModule } from '@nestjs/testing';
import { AdminPermissionsService } from './admin-permissions.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminPermissions } from './entities/admin-permission.entity';
import { Repository } from 'typeorm';
import { CreateAdminPermissionDto } from './dto/create-admin-permission.dto';
import { UpdateAdminPermissionDto } from './dto/update-admin-permission.dto';
import { NotFoundException } from '@nestjs/common';

describe('AdminPermissionsService', () => {
  let service: AdminPermissionsService;
  let repository: Repository<AdminPermissions>;

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
        AdminPermissionsService,
        {
          provide: getRepositoryToken(AdminPermissions),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdminPermissionsService>(AdminPermissionsService);
    repository = module.get<Repository<AdminPermissions>>(getRepositoryToken(AdminPermissions));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new permission', async () => {
      const createDto: CreateAdminPermissionDto = {
        permissionName: 'test_permission',
        displayGroupId: 1,
        displayOrder: 1,
      };
      const newPermission = { id: 1, ...createDto };

      mockRepository.create.mockReturnValue(newPermission);
      mockRepository.save.mockResolvedValue(newPermission);

      expect(await service.create(createDto)).toEqual(newPermission);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(newPermission);
    });
  });

  describe('findAll', () => {
    it('should return an array of permissions', async () => {
      const permissions = [{ id: 1, permissionName: 'test' }];
      mockRepository.find.mockResolvedValue(permissions);
      expect(await service.findAll()).toEqual(permissions);
    });
  });

  describe('findOne', () => {
    it('should return a single permission', async () => {
      const permission = { id: 1, permissionName: 'test' };
      mockRepository.findOne.mockResolvedValue(permission);
      expect(await service.findOne(1)).toEqual(permission);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw a NotFoundException if permission is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a permission', async () => {
      const updateDto: UpdateAdminPermissionDto = { permissionName: 'updated_permission' };
      const updatedPermission = { id: 1, permissionName: 'updated_permission' };

      mockRepository.preload.mockResolvedValue(updatedPermission);
      mockRepository.save.mockResolvedValue(updatedPermission);

      expect(await service.update(1, updateDto)).toEqual(updatedPermission);
      expect(repository.preload).toHaveBeenCalledWith({ id: 1, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedPermission);
    });

    it('should throw a NotFoundException if permission to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a permission', async () => {
      const existingPermission = { id: 1, permissionName: 'test' };
      jest.spyOn(service, 'findOne').mockResolvedValue(existingPermission as any);
      mockRepository.remove.mockResolvedValue(existingPermission as any);

      expect(await service.remove(1)).toEqual({ message: `AdminPermission with ID #1 has been removed` });
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(repository.remove).toHaveBeenCalledWith(existingPermission);
    });
  });
});