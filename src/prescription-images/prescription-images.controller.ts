import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrescriptionImagesService } from './prescription-images.service';
import { CreatePrescriptionImageDto } from './dto/create-prescription-image.dto';
import { UpdatePrescriptionImageDto } from './dto/update-prescription-image.dto';

@Controller('prescription-images')
export class PrescriptionImagesController {
  constructor(private readonly prescriptionImagesService: PrescriptionImagesService) {}

  @Post()
  create(@Body() createPrescriptionImageDto: CreatePrescriptionImageDto) {
    return this.prescriptionImagesService.create(createPrescriptionImageDto);
  }

  @Get()
  findAll() {
    return this.prescriptionImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prescriptionImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrescriptionImageDto: UpdatePrescriptionImageDto) {
    return this.prescriptionImagesService.update(+id, updatePrescriptionImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prescriptionImagesService.remove(+id);
  }
}
