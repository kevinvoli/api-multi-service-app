import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}
  async create(createCompanyDto: CreateCompanyDto): Promise<Omit<Company, 'vPassword'>> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createCompanyDto.vPassword, salt);

    const newCompany = this.companyRepository.create({
      ...createCompanyDto,
      vPassword: hashedPassword,
    });

    const savedCompany = await this.companyRepository.save(newCompany);

    const { vPassword, ...result } = savedCompany;
    return result;
  }

  async findAll(): Promise<Omit<Company, 'vPassword'>[]> {
    const companies = await this.companyRepository.find();
    return companies.map(company => {
      const { vPassword, ...result } = company;
      return result;
    });
  }

  async findOne(id: number): Promise<Omit<Company, 'vPassword'>> {
    const company = await this.companyRepository.findOne({ where: { iCompanyId: id } });
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }
    const { vPassword, ...result } = company;
    return result;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto): Promise<Omit<Company, 'vPassword'>> {
    if (updateCompanyDto.vPassword) {
      const salt = await bcrypt.genSalt();
      updateCompanyDto.vPassword = await bcrypt.hash(updateCompanyDto.vPassword, salt);
    }

    const company = await this.companyRepository.preload({
      iCompanyId: id,
      ...updateCompanyDto,
    });

    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }

    const updatedCompany = await this.companyRepository.save(company);
    const { vPassword, ...result } = updatedCompany;
    return result;
  }

  async remove(id: number): Promise<Omit<Company, 'vPassword'>> {
    const company = await this.companyRepository.findOne({ where: { iCompanyId: id } });
    if (!company) {
      throw new NotFoundException(`Company with ID "${id}" not found`);
    }

    company.eStatus = 'Deleted';
    const deletedCompany = await this.companyRepository.save(company);

    const { vPassword, ...result } = deletedCompany;
    return result;
  }
}
