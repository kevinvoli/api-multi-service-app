import { Test, TestingModule } from '@nestjs/testing';
import { PassengerRequestsController } from './passenger-requests.controller';
import { PassengerRequestsService } from './passenger-requests.service';

describe('PassengerRequestsController', () => {
  let controller: PassengerRequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassengerRequestsController],
      providers: [PassengerRequestsService],
    }).compile();

    controller = module.get<PassengerRequestsController>(PassengerRequestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
