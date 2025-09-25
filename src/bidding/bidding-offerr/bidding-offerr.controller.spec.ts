import { Test, TestingModule } from '@nestjs/testing';
import { BiddingOfferrController } from './bidding-offerr.controller';
import { BiddingOfferrService } from './bidding-offerr.service';

describe('BiddingOfferrController', () => {
  let controller: BiddingOfferrController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiddingOfferrController],
      providers: [BiddingOfferrService],
    }).compile();

    controller = module.get<BiddingOfferrController>(BiddingOfferrController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
