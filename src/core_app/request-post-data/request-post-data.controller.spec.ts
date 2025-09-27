import { Test, TestingModule } from '@nestjs/testing';
import { RequestPostDataController } from './request-post-data.controller';
import { RequestPostDataService } from './request-post-data.service';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';

const mockRequestPostDataService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('RequestPostDataController', () => {
  let controller: RequestPostDataController;
  let service: RequestPostDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestPostDataController],
      providers: [
        {
          provide: RequestPostDataService,
          useValue: mockRequestPostDataService,
        },
      ],
    }).compile();

    controller = module.get<RequestPostDataController>(RequestPostDataController);
    service = module.get<RequestPostDataService>(RequestPostDataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new request post data log', async () => {
      const createRequestPostDatumDto: CreateRequestPostDatumDto = {
        tData: '{"key":"value"}',
        tipaddress: '127.0.0.1',
      };
      const expectedResult = { iRequestPostId: 1, ...createRequestPostDatumDto };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createRequestPostDatumDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createRequestPostDatumDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of request post data logs', async () => {
      const expectedResult = [{ iRequestPostId: 1, tData: '{"key":"value"}' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single request post data log', async () => {
      const id = '1';
      const expectedResult = { iRequestPostId: 1, tData: '{"key":"value"}' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a request post data log', async () => {
      const id = '1';
      const updateRequestPostDatumDto: UpdateRequestPostDatumDto = { tData: '{"new_key":"new_value"}' };
      const expectedResult = { iRequestPostId: 1, tData: '{"new_key":"new_value"}' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateRequestPostDatumDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateRequestPostDatumDto);
    });
  });

  describe('remove', () => {
    it('should remove a request post data log', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});