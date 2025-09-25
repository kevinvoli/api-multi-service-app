import { Injectable } from '@nestjs/common';
import { CreateDataStorageEngineDto } from './dto/create-data-storage-engine.dto';
import { UpdateDataStorageEngineDto } from './dto/update-data-storage-engine.dto';

@Injectable()
export class DataStorageEngineService {
  create(createDataStorageEngineDto: CreateDataStorageEngineDto) {
    return 'This action adds a new dataStorageEngine';
  }

  findAll() {
    return `This action returns all dataStorageEngine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataStorageEngine`;
  }

  update(id: number, updateDataStorageEngineDto: UpdateDataStorageEngineDto) {
    return `This action updates a #${id} dataStorageEngine`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataStorageEngine`;
  }
}
