import { Module } from '@nestjs/common';
import { DataStorageEngineService } from './data-storage-engine.service';
import { DataStorageEngineController } from './data-storage-engine.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataStorageEngine } from './entities/data-storage-engine.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataStorageEngine])],
  controllers: [DataStorageEngineController],
  providers: [DataStorageEngineService],
})
export class DataStorageEngineModule {}
