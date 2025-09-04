import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyCuisineService } from './company-cuisine.service';
import { CreateCompanyCuisineDto } from './dto/create-company-cuisine.dto';
import { UpdateCompanyCuisineDto } from './dto/update-company-cuisine.dto';

@Controller('company-cuisine')
export class CompanyCuisineController {
  constructor(private readonly companyCuisineService: CompanyCuisineService) {}

  @Post()
  create(@Body() createCompanyCuisineDto: CreateCompanyCuisineDto) {
    return this.companyCuisineService.create(createCompanyCuisineDto);
  }

  @Get()
  findAll() {
    return this.companyCuisineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyCuisineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyCuisineDto: UpdateCompanyCuisineDto) {
    return this.companyCuisineService.update(+id, updateCompanyCuisineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyCuisineService.remove(+id);
  }
}
