import { Test, TestingModule } from '@nestjs/testing';
import { RequestDataDebugController } from './request-data-debug.controller';
import { RequestDataDebugService } from './request-data-debug.service';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';

const mockRequestDataDebugService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  remove: jest.fn(),
};

describe('RequestDataDebugController', () => {
  let controller: RequestDataDebugController;
  let service: RequestDataDebugService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestDataDebugController],
      providers: [
        {
          provide: RequestDataDebugService,
          useValue: mockRequestDataDebugService,
        },
      ],
    }).compile();

    controller = module.get<RequestDataDebugController>(RequestDataDebugController);
    service = module.get<RequestDataDebugService>(RequestDataDebugService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create a new request data debug log', async () => {
      const createRequestDataDebugDto: CreateRequestDataDebugDto = {
        tTitle: 'Test Title',
        tType: 'Test Type',
        tDescription: 'Test Description',
        tPurpose: 'Test Purpose',
        tCallToAction: 'Test CTA',
        tRequestParam: '{"param":"value"}',
      };
      const expectedResult = { iRequestData: 1, ...createRequestDataDebugDto, dModifiedDate: new Date() };
      jest.spyOn(service, 'create').mockResolvedValue(expectedResult as any);

      expect(await controller.create(createRequestDataDebugDto)).toEqual(expectedResult);
      expect(service.create).toHaveBeenCalledWith(createRequestDataDebugDto);
    });
  });

  describe('findAll', () => {
    it('should return an array of request data debug logs', async () => {
      const expectedResult = [{ iRequestData: 1, tTitle: 'Test Title' }];
      jest.spyOn(service, 'findAll').mockResolvedValue(expectedResult as any);
      expect(await controller.findAll()).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return a single request data debug log', async () => {
      const id = '1';
      const expectedResult = { iRequestData: 1, tTitle: 'Test Title' };
      jest.spyOn(service, 'findOne').mockResolvedValue(expectedResult as any);
      expect(await controller.findOne(id)).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledWith(+id);
    });
  });

  describe('update', () => {
    it('should update a request data debug log', async () => {
      const id = '1';
      const updateRequestDataDebugDto: UpdateRequestDataDebugDto = { tTitle: 'Updated Title' };
      const expectedResult = { iRequestData: 1, tTitle: 'Updated Title' };
      jest.spyOn(service, 'update').mockResolvedValue(expectedResult as any);

      expect(await controller.update(id, updateRequestDataDebugDto)).toEqual(expectedResult);
      expect(service.update).toHaveBeenCalledWith(+id, updateRequestDataDebugDto);
    });
  });

  describe('remove', () => {
    it('should remove a request data debug log', async () => {
      const id = '1';
      jest.spyOn(service, 'remove').mockResolvedValue(undefined);
      await controller.remove(id);
      expect(service.remove).toHaveBeenCalledWith(+id);
    });
  });
});