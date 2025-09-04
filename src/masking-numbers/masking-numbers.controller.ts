import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaskingNumbersService } from './masking-numbers.service';
import { CreateMaskingNumberDto } from './dto/create-masking-number.dto';
import { UpdateMaskingNumberDto } from './dto/update-masking-number.dto';

@Controller('masking-numbers')
export class MaskingNumbersController {
  constructor(private readonly maskingNumbersService: MaskingNumbersService) {}

  @Post()
  create(@Body() createMaskingNumberDto: CreateMaskingNumberDto) {
    return this.maskingNumbersService.create(createMaskingNumberDto);
  }

  @Get()
  findAll() {
    return this.maskingNumbersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maskingNumbersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaskingNumberDto: UpdateMaskingNumberDto) {
    return this.maskingNumbersService.update(+id, updateMaskingNumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maskingNumbersService.remove(+id);
  }
}
