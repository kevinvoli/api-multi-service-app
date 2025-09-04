import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyRequestService } from './company-request.service';
import { CreateCompanyRequestDto } from './dto/create-company-request.dto';
import { UpdateCompanyRequestDto } from './dto/update-company-request.dto';

@Controller('company-request')
export class CompanyRequestController {
  constructor(private readonly companyRequestService: CompanyRequestService) {}

  @Post()
  create(@Body() createCompanyRequestDto: CreateCompanyRequestDto) {
    return this.companyRequestService.create(createCompanyRequestDto);
  }

  @Get()
  findAll() {
    return this.companyRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyRequestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyRequestDto: UpdateCompanyRequestDto) {
    return this.companyRequestService.update(+id, updateCompanyRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyRequestService.remove(+id);
  }
}
