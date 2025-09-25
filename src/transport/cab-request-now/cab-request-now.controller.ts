import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CabRequestNowService } from './cab-request-now.service';
import { CreateCabRequestNowDto } from './dto/create-cab-request-now.dto';
import { UpdateCabRequestNowDto } from './dto/update-cab-request-now.dto';

@Controller('cab-request-now')
export class CabRequestNowController {
  constructor(private readonly cabRequestNowService: CabRequestNowService) {}

  @Post()
  create(@Body() createCabRequestNowDto: CreateCabRequestNowDto) {
    return this.cabRequestNowService.create(createCabRequestNowDto);
  }

  @Get()
  findAll() {
    return this.cabRequestNowService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cabRequestNowService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCabRequestNowDto: UpdateCabRequestNowDto) {
    return this.cabRequestNowService.update(+id, updateCabRequestNowDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cabRequestNowService.remove(+id);
  }
}
