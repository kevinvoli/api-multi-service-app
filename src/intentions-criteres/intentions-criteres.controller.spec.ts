import { Test, TestingModule } from '@nestjs/testing';
import { IntentionsCriteresController } from './intentions-criteres.controller';
import { IntentionsCriteresService } from './intentions-criteres.service';

describe('IntentionsCriteresController', () => {
  let controller: IntentionsCriteresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntentionsCriteresController],
      providers: [IntentionsCriteresService],
    }).compile();

    controller = module.get<IntentionsCriteresController>(IntentionsCriteresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
