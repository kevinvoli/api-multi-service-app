import { Test, TestingModule } from '@nestjs/testing';
import { AdminGroupsService } from './admin-groups.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { AdminGroups } from './entities/admin-group.entity';
import { Repository } from 'typeorm';
import { CreateAdminGroupDto } from './dto/create-admin-group.dto';
import { UpdateAdminGroupDto } from './dto/update-admin-group.dto';
import { NotFoundException } from '@nestjs/common';

describe('AdminGroupsService', () => {
  let service: AdminGroupsService;
  let repository: Repository<AdminGroups>;

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
        AdminGroupsService,
        {
          provide: getRepositoryToken(AdminGroups),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdminGroupsService>(AdminGroupsService);
    repository = module.get<Repository<AdminGroups>>(getRepositoryToken(AdminGroups));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create and save a new group', async () => {
      const createDto: CreateAdminGroupDto = { vGroup: 'Test Group' };
      const newGroup = { iGroupId: 1, ...createDto, eStatus: 'Active' };

      mockRepository.create.mockReturnValue(newGroup);
      mockRepository.save.mockResolvedValue(newGroup);

      expect(await service.create(createDto)).toEqual(newGroup);
      expect(repository.create).toHaveBeenCalledWith(createDto);
      expect(repository.save).toHaveBeenCalledWith(newGroup);
    });
  });

  describe('findAll', () => {
    it('should return an array of groups', async () => {
      const groups = [{ iGroupId: 1, vGroup: 'Test Group', eStatus: 'Active' }];
      mockRepository.find.mockResolvedValue(groups);
      expect(await service.findAll()).toEqual(groups);
    });
  });

  describe('findOne', () => {
    it('should return a single group', async () => {
      const group = { iGroupId: 1, vGroup: 'Test Group', eStatus: 'Active' };
      mockRepository.findOne.mockResolvedValue(group);
      expect(await service.findOne(1)).toEqual(group);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iGroupId: 1 } });
    });

    it('should throw a NotFoundException if group is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update a group', async () => {
      const updateDto: UpdateAdminGroupDto = { vGroup: 'Updated Group' };
      const updatedGroup = { iGroupId: 1, vGroup: 'Updated Group', eStatus: 'Active' };

      mockRepository.preload.mockResolvedValue(updatedGroup);
      mockRepository.save.mockResolvedValue(updatedGroup);

      expect(await service.update(1, updateDto)).toEqual(updatedGroup);
      expect(repository.preload).toHaveBeenCalledWith({ iGroupId: 1, ...updateDto });
      expect(repository.save).toHaveBeenCalledWith(updatedGroup);
    });

    it('should throw a NotFoundException if group to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove a group', async () => {
      const existingGroup = { iGroupId: 1, vGroup: 'Test Group', eStatus: 'Active' };
      jest.spyOn(service, 'findOne').mockResolvedValue(existingGroup as any);
      mockRepository.remove.mockResolvedValue(existingGroup as any);

      expect(await service.remove(1)).toEqual({ message: `AdminGroup with ID #1 has been removed` });
      expect(service.findOne).toHaveBeenCalledWith(1);
      expect(repository.remove).toHaveBeenCalledWith(existingGroup);
    });
  });
});