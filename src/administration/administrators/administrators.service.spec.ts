import { Test, TestingModule } from '@nestjs/testing';
import { AdministratorsService } from './administrators.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Administrators } from './entities/administrator.entity';
import { Repository } from 'typeorm';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

jest.mock('bcrypt', () => ({
  genSalt: jest.fn().mockResolvedValue('a-salt-string'),
  hash: jest.fn().mockResolvedValue('hashed-password'),
}));

describe('AdministratorsService', () => {
  let service: AdministratorsService;
  let repository: Repository<Administrators>;

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
        AdministratorsService,
        {
          provide: getRepositoryToken(Administrators),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<AdministratorsService>(AdministratorsService);
    repository = module.get<Repository<Administrators>>(getRepositoryToken(Administrators));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should create, hash password, and save a new admin', async () => {
      const createDto: CreateAdministratorDto = {
        vFirstName: 'John',
        vLastName: 'Doe',
        vEmail: 'john@doe.com',
        vPassword: 'password123',
        vContactNo: '123',
        vCode: '123',
        vCountry: 'USA',
        vState: 'CA',
        vCity: 'LA',
        vAddress: '123 Main St',
        vAddressLat: '34.0522',
        vAddressLong: '-118.2437',
        fHotelServiceCharge: 0,
        vPaymentEmail: 'pay@doe.com',
        vBankAccountHolderName: 'John Doe',
        vAccountNumber: '12345',
        vBankName: 'Bank',
        vBankLocation: 'LA',
        vBicSwiftCode: 'BOFAUS3N',
      };
      const createdAdmin = { iAdminId: 1, ...createDto, vPassword: 'hashed-password' };
      const { vPassword, ...resultWithoutPassword } = createdAdmin;

      mockRepository.create.mockReturnValue(createdAdmin);
      mockRepository.save.mockResolvedValue(createdAdmin);

      const result = await service.create(createDto);

      expect(bcrypt.hash).toHaveBeenCalledWith('password123', 'a-salt-string');
      expect(repository.create).toHaveBeenCalledWith({ ...createDto, vPassword: 'hashed-password' });
      expect(repository.save).toHaveBeenCalledWith(createdAdmin);
      expect(result).toEqual(resultWithoutPassword);
      expect(result).not.toHaveProperty('vPassword');
    });

    it('should throw BadRequestException on duplicate email', async () => {
        const createDto: any = { vEmail: 'test@test.com', vPassword: 'password' };
        mockRepository.save.mockRejectedValue({ code: 'ER_DUP_ENTRY' });

        await expect(service.create(createDto)).rejects.toThrow(BadRequestException);
      });
  });

  describe('findAll', () => {
    it('should return an array of admins without passwords', async () => {
      const admins = [{ iAdminId: 1, vFirstName: 'John' }];
      mockRepository.find.mockResolvedValue(admins);
      expect(await service.findAll()).toEqual(admins);
      expect(repository.find).toHaveBeenCalledWith({
        select: expect.not.objectContaining({ vPassword: expect.anything() }),
      });
    });
  });

  describe('findOne', () => {
    it('should return a single admin without password', async () => {
      const admin = { iAdminId: 1, vFirstName: 'John' };
      mockRepository.findOne.mockResolvedValue(admin);
      expect(await service.findOne(1)).toEqual(admin);
      expect(repository.findOne).toHaveBeenCalledWith({
        where: { iAdminId: 1 },
        select: expect.not.objectContaining({ vPassword: expect.anything() }),
      });
    });

    it('should throw a NotFoundException if admin is not found', async () => {
      mockRepository.findOne.mockResolvedValue(null);
      await expect(service.findOne(1)).rejects.toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('should update an admin and hash password if provided', async () => {
        const updateDto: UpdateAdministratorDto = { vFirstName: 'Jane', vPassword: 'newPassword' };
        const updatedAdmin = { iAdminId: 1, vFirstName: 'Jane', vPassword: 'hashed-password' };
        const { vPassword, ...resultWithoutPassword } = updatedAdmin;

        mockRepository.preload.mockResolvedValue(updatedAdmin);
        mockRepository.save.mockResolvedValue(updatedAdmin);

        const result = await service.update(1, updateDto);

        expect(bcrypt.hash).toHaveBeenCalledWith('newPassword', 'a-salt-string');
        expect(repository.preload).toHaveBeenCalledWith({ iAdminId: 1, ...updateDto, vPassword: 'hashed-password' });
        expect(repository.save).toHaveBeenCalledWith(updatedAdmin);
        expect(result).toEqual(resultWithoutPassword);
        expect(result).not.toHaveProperty('vPassword');
      });

    it('should throw a NotFoundException if admin to update is not found', async () => {
      mockRepository.preload.mockResolvedValue(null);
      await expect(service.update(1, {})).rejects.toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('should remove an admin', async () => {
      const existingAdmin = { iAdminId: 1, vFirstName: 'John' };
      mockRepository.findOne.mockResolvedValue(existingAdmin);
      mockRepository.remove.mockResolvedValue(existingAdmin as any);

      expect(await service.remove(1)).toEqual({ message: `Administrator with ID #1 has been removed` });
      expect(repository.findOne).toHaveBeenCalledWith({ where: { iAdminId: 1 } });
      expect(repository.remove).toHaveBeenCalledWith(existingAdmin);
    });
  });
});