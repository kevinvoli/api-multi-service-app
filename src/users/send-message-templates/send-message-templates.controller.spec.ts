import { Test, TestingModule } from '@nestjs/testing';
import { SendMessageTemplatesController } from './send-message-templates.controller';
import { SendMessageTemplatesService } from './send-message-templates.service';

describe('SendMessageTemplatesController', () => {
  let controller: SendMessageTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SendMessageTemplatesController],
      providers: [SendMessageTemplatesService],
    }).compile();

    controller = module.get<SendMessageTemplatesController>(SendMessageTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
