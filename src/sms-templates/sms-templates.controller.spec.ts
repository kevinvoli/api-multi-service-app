import { Test, TestingModule } from '@nestjs/testing';
import { SmsTemplatesController } from './sms-templates.controller';
import { SmsTemplatesService } from './sms-templates.service';

describe('SmsTemplatesController', () => {
  let controller: SmsTemplatesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmsTemplatesController],
      providers: [SmsTemplatesService],
    }).compile();

    controller = module.get<SmsTemplatesController>(SmsTemplatesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
