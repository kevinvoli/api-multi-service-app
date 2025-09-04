import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestrictedNegativeAreaService } from './restricted-negative-area.service';
import { CreateRestrictedNegativeAreaDto } from './dto/create-restricted-negative-area.dto';
import { UpdateRestrictedNegativeAreaDto } from './dto/update-restricted-negative-area.dto';

@Controller('restricted-negative-area')
export class RestrictedNegativeAreaController {
  constructor(private readonly restrictedNegativeAreaService: RestrictedNegativeAreaService) {}

  @Post()
  create(@Body() createRestrictedNegativeAreaDto: CreateRestrictedNegativeAreaDto) {
    return this.restrictedNegativeAreaService.create(createRestrictedNegativeAreaDto);
  }

  @Get()
  findAll() {
    return this.restrictedNegativeAreaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restrictedNegativeAreaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRestrictedNegativeAreaDto: UpdateRestrictedNegativeAreaDto) {
    return this.restrictedNegativeAreaService.update(+id, updateRestrictedNegativeAreaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restrictedNegativeAreaService.remove(+id);
  }
}
