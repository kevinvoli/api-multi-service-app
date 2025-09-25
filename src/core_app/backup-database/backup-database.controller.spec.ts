import { Test, TestingModule } from '@nestjs/testing';
import { BackupDatabaseController } from './backup-database.controller';
import { BackupDatabaseService } from './backup-database.service';

describe('BackupDatabaseController', () => {
  let controller: BackupDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BackupDatabaseController],
      providers: [BackupDatabaseService],
    }).compile();

    controller = module.get<BackupDatabaseController>(BackupDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
