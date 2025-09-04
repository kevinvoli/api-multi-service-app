import { Test, TestingModule } from '@nestjs/testing';
import { TripsStatusMessagesController } from './trips-status-messages.controller';
import { TripsStatusMessagesService } from './trips-status-messages.service';

describe('TripsStatusMessagesController', () => {
  let controller: TripsStatusMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TripsStatusMessagesController],
      providers: [TripsStatusMessagesService],
    }).compile();

    controller = module.get<TripsStatusMessagesController>(TripsStatusMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
