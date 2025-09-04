import { Test, TestingModule } from '@nestjs/testing';
import { TripMessagesController } from './trip-messages.controller';
import { TripMessagesService } from './trip-messages.service';

describe('TripMessagesController', () => {
  let controller: TripMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripMessagesController],
      providers: [TripMessagesService],
    }).compile();

    controller = module.get<TripMessagesController>(TripMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
