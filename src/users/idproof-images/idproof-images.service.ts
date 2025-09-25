import { Injectable } from '@nestjs/common';
import { CreateIdproofImageDto } from './dto/create-idproof-image.dto';
import { UpdateIdproofImageDto } from './dto/update-idproof-image.dto';

@Injectable()
export class IdproofImagesService {
  create(createIdproofImageDto: CreateIdproofImageDto) {
    return 'This action adds a new idproofImage';
  }

  findAll() {
    return `This action returns all idproofImages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} idproofImage`;
  }

  update(id: number, updateIdproofImageDto: UpdateIdproofImageDto) {
    return `This action updates a #${id} idproofImage`;
  }

  remove(id: number) {
    return `This action removes a #${id} idproofImage`;
  }
}
