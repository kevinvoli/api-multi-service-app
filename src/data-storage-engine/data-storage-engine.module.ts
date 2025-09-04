import { Module } from '@nestjs/common';
import { DataStorageEngineService } from './data-storage-engine.service';
import { DataStorageEngineController } from './data-storage-engine.controller';

@Module({
  controllers: [DataStorageEngineController],
  providers: [DataStorageEngineService],
})
export class DataStorageEngineModule {}
