import { Injectable } from '@nestjs/common';
import { CreateMasterServiceMenuDto } from './dto/create-master-service-menu.dto';
import { UpdateMasterServiceMenuDto } from './dto/update-master-service-menu.dto';

@Injectable()
export class MasterServiceMenuService {
  create(createMasterServiceMenuDto: CreateMasterServiceMenuDto) {
    return 'This action adds a new masterServiceMenu';
  }

  findAll() {
    return `This action returns all masterServiceMenu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} masterServiceMenu`;
  }

  update(id: number, updateMasterServiceMenuDto: UpdateMasterServiceMenuDto) {
    return `This action updates a #${id} masterServiceMenu`;
  }

  remove(id: number) {
    return `This action removes a #${id} masterServiceMenu`;
  }
}
