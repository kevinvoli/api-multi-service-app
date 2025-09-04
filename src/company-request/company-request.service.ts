import { Injectable } from '@nestjs/common';
import { CreateCompanyRequestDto } from './dto/create-company-request.dto';
import { UpdateCompanyRequestDto } from './dto/update-company-request.dto';

@Injectable()
export class CompanyRequestService {
  create(createCompanyRequestDto: CreateCompanyRequestDto) {
    return 'This action adds a new companyRequest';
  }

  findAll() {
    return `This action returns all companyRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} companyRequest`;
  }

  update(id: number, updateCompanyRequestDto: UpdateCompanyRequestDto) {
    return `This action updates a #${id} companyRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} companyRequest`;
  }
}
