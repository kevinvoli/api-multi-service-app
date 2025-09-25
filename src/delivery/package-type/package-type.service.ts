import { Injectable } from '@nestjs/common';
import { CreatePackageTypeDto } from './dto/create-package-type.dto';
import { UpdatePackageTypeDto } from './dto/update-package-type.dto';

@Injectable()
export class PackageTypeService {
  create(createPackageTypeDto: CreatePackageTypeDto) {
    return 'This action adds a new packageType';
  }

  findAll() {
    return `This action returns all packageType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} packageType`;
  }

  update(id: number, updatePackageTypeDto: UpdatePackageTypeDto) {
    return `This action updates a #${id} packageType`;
  }

  remove(id: number) {
    return `This action removes a #${id} packageType`;
  }
}
