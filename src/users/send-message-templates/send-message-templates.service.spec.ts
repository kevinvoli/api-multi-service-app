import { Test, TestingModule } from '@nestjs/testing';
import { SendMessageTemplatesService } from './send-message-templates.service';

describe('SendMessageTemplatesService', () => {
  let service: SendMessageTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendMessageTemplatesService],
    }).compile();

    service = module.get<SendMessageTemplatesService>(SendMessageTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
