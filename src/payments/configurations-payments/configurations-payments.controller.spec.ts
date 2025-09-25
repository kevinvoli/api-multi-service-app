import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationsPaymentsController } from './configurations-payments.controller';
import { ConfigurationsPaymentsService } from './configurations-payments.service';

describe('ConfigurationsPaymentsController', () => {
  let controller: ConfigurationsPaymentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigurationsPaymentsController],
      providers: [ConfigurationsPaymentsService],
    }).compile();

    controller = module.get<ConfigurationsPaymentsController>(ConfigurationsPaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
