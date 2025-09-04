import { Injectable } from '@nestjs/common';
import { CreateCompanyCuisineDto } from './dto/create-company-cuisine.dto';
import { UpdateCompanyCuisineDto } from './dto/update-company-cuisine.dto';

@Injectable()
export class CompanyCuisineService {
  create(createCompanyCuisineDto: CreateCompanyCuisineDto) {
    return 'This action adds a new companyCuisine';
  }

  findAll() {
    return `This action returns all companyCuisine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyCuisine`;
  }

  update(id: number, updateCompanyCuisineDto: UpdateCompanyCuisineDto) {
    return `This action updates a #${id} companyCuisine`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyCuisine`;
  }
}
