import { Injectable } from '@nestjs/common';
import { CreateAllDatabaseDetailDto } from './dto/create-all-database-detail.dto';
import { UpdateAllDatabaseDetailDto } from './dto/update-all-database-detail.dto';

@Injectable()
export class AllDatabaseDetailsService {
  create(createAllDatabaseDetailDto: CreateAllDatabaseDetailDto) {
    return 'This action adds a new allDatabaseDetail';
  }

  findAll() {
    return `This action returns all allDatabaseDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} allDatabaseDetail`;
  }

  update(id: number, updateAllDatabaseDetailDto: UpdateAllDatabaseDetailDto) {
    return `This action updates a #${id} allDatabaseDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} allDatabaseDetail`;
  }
}
