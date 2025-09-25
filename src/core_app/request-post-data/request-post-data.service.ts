import { Injectable } from '@nestjs/common';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';

@Injectable()
export class RequestPostDataService {
  create(createRequestPostDatumDto: CreateRequestPostDatumDto) {
    return 'This action adds a new requestPostDatum';
  }

  findAll() {
    return `This action returns all requestPostData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} requestPostDatum`;
  }

  update(id: number, updateRequestPostDatumDto: UpdateRequestPostDatumDto) {
    return `This action updates a #${id} requestPostDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestPostDatum`;
  }
}
