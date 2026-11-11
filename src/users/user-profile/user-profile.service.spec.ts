import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserProfileService } from './user-profile.service';
import { RegisterUser } from '../register-user/entities/register-user.entity';
import { RegisterDriver } from '../register-driver/entities/register-driver.entity';
import { Company } from '../company/entities/company.entity';
import { UserAddress } from '../user-address/entities/user-address.entity';
import { SENSITIVE_ACCOUNT_FIELDS } from '../../common/utils/sensitive-fields';

const mockRepo = {
  find: jest.fn().mockResolvedValue([]),
  findOne: jest.fn().mockResolvedValue(null),
  findOneBy: jest.fn().mockResolvedValue(null),
  create: jest.fn().mockReturnValue({}),
  save: jest.fn().mockResolvedValue({}),
  update: jest.fn().mockResolvedValue({ affected: 1 }),
  delete: jest.fn().mockResolvedValue({ affected: 1 }),
  createQueryBuilder: jest.fn().mockReturnValue({
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    select: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    skip: jest.fn().mockReturnThis(),
    take: jest.fn().mockReturnThis(),
    getMany: jest.fn().mockResolvedValue([]),
    getOne: jest.fn().mockResolvedValue(null),
    getManyAndCount: jest.fn().mockResolvedValue([[], 0]),
    getCount: jest.fn().mockResolvedValue(0),
  }),
};

describe('UserProfileService', () => {
  let service: UserProfileService;

  beforeEach(async () => {
    jest.clearAllMocks();
    mockRepo.findOneBy.mockResolvedValue(null);
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserProfileService,
        { provide: getRepositoryToken(RegisterUser), useValue: mockRepo },
        { provide: getRepositoryToken(RegisterDriver), useValue: mockRepo },
        { provide: getRepositoryToken(Company), useValue: mockRepo },
        { provide: getRepositoryToken(UserAddress), useValue: mockRepo },
      ],
    }).compile();

    service = module.get<UserProfileService>(UserProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getProfile', () => {
    const secrets = Object.fromEntries(
      SENSITIVE_ACCOUNT_FIELDS.map((field) => [field, `secret-${field}`]),
    );

    it.each(['rider', 'driver', 'company'] as const)(
      'ne renvoie aucun champ sensible pour %s',
      async (userType) => {
        mockRepo.findOneBy.mockResolvedValueOnce({
          iUserId: 5,
          vName: 'Awa',
          vEmail: 'awa@amygo.test',
          ...secrets,
        });

        const profile = await service.getProfile(5, userType);

        expect(profile).toMatchObject({
          vName: 'Awa',
          vEmail: 'awa@amygo.test',
        });
        for (const field of SENSITIVE_ACCOUNT_FIELDS) {
          expect(profile).not.toHaveProperty(field);
        }
      },
    );

    it('leve NotFound si le compte est inconnu', async () => {
      await expect(service.getProfile(5, 'rider')).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('removeAddress', () => {
    it('cherche l adresse active du rider et la marque supprimée', async () => {
      mockRepo.findOneBy.mockResolvedValueOnce({ iUserAddressId: 7 });

      await expect(service.removeAddress(10, 7)).resolves.toEqual({
        success: true,
      });
      expect(mockRepo.findOneBy).toHaveBeenCalledWith({
        iUserAddressId: 7,
        iUserId: 10,
        eUserType: 'Rider',
        eStatus: 'Active',
      });
      expect(mockRepo.update).toHaveBeenCalledWith(
        { iUserAddressId: 7 },
        { eStatus: 'Deleted' },
      );
    });

    it('renvoie 404 pour une adresse absente, supprimée ou d un autre', async () => {
      await expect(service.removeAddress(10, 7)).rejects.toThrow(
        NotFoundException,
      );
      expect(mockRepo.update).not.toHaveBeenCalled();
    });
  });
});
