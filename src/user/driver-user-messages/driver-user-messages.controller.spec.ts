import { Test, TestingModule } from '@nestjs/testing';
import { DriverUserMessagesController } from './driver-user-messages.controller';
import { DriverUserMessagesService } from './driver-user-messages.service';

describe('DriverUserMessagesController', () => {
  let controller: DriverUserMessagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverUserMessagesController],
      providers: [DriverUserMessagesService],
    }).compile();

    controller = module.get<DriverUserMessagesController>(DriverUserMessagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
