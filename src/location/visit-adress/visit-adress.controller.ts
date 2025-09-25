import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VisitAdressService } from './visit-adress.service';
import { CreateVisitAdressDto } from './dto/create-visit-adress.dto';
import { UpdateVisitAdressDto } from './dto/update-visit-adress.dto';

@Controller('visit-adress')
export class VisitAdressController {
  constructor(private readonly visitAdressService: VisitAdressService) {}

  @Post()
  create(@Body() createVisitAdressDto: CreateVisitAdressDto) {
    return this.visitAdressService.create(createVisitAdressDto);
  }

  @Get()
  findAll() {
    return this.visitAdressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.visitAdressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVisitAdressDto: UpdateVisitAdressDto) {
    return this.visitAdressService.update(+id, updateVisitAdressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.visitAdressService.remove(+id);
  }
}
