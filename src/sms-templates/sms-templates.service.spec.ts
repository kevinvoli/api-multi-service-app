import { Test, TestingModule } from '@nestjs/testing';
import { SmsTemplatesService } from './sms-templates.service';

describe('SmsTemplatesService', () => {
  let service: SmsTemplatesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmsTemplatesService],
    }).compile();

    service = module.get<SmsTemplatesService>(SmsTemplatesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
