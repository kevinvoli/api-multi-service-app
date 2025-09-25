import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RentalPackageService } from './rental-package.service';
import { CreateRentalPackageDto } from './dto/create-rental-package.dto';
import { UpdateRentalPackageDto } from './dto/update-rental-package.dto';

@Controller('rental-package')
export class RentalPackageController {
  constructor(private readonly rentalPackageService: RentalPackageService) {}

  @Post()
  create(@Body() createRentalPackageDto: CreateRentalPackageDto) {
    return this.rentalPackageService.create(createRentalPackageDto);
  }

  @Get()
  findAll() {
    return this.rentalPackageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rentalPackageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRentalPackageDto: UpdateRentalPackageDto) {
    return this.rentalPackageService.update(+id, updateRentalPackageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rentalPackageService.remove(+id);
  }
}
