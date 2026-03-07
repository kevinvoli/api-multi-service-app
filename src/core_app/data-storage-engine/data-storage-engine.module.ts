import { Module } from '@nestjs/common';
import { DataStorageEngine } from './entities/data-storage-engine.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataStorageEngineService } from './data-storage-engine.service';
import { DataStorageEngineController } from './data-storage-engine.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DataStorageEngine])],
  controllers: [DataStorageEngineController],
  providers: [DataStorageEngineService],
  exports: [TypeOrmModule.forFeature([DataStorageEngine])],
})
export class DataStorageEngineModule {}
