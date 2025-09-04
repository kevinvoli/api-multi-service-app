import { Injectable } from '@nestjs/common';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';

@Injectable()
export class RequestDataDebugService {
  create(createRequestDataDebugDto: CreateRequestDataDebugDto) {
    return 'This action adds a new requestDataDebug';
  }

  findAll() {
    return `This action returns all requestDataDebug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestDataDebug`;
  }

  update(id: number, updateRequestDataDebugDto: UpdateRequestDataDebugDto) {
    return `This action updates a #${id} requestDataDebug`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestDataDebug`;
  }
}
