import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdproofImagesService } from './idproof-images.service';
import { CreateIdproofImageDto } from './dto/create-idproof-image.dto';
import { UpdateIdproofImageDto } from './dto/update-idproof-image.dto';

@Controller('idproof-images')
export class IdproofImagesController {
  constructor(private readonly idproofImagesService: IdproofImagesService) {}

  @Post()
  create(@Body() createIdproofImageDto: CreateIdproofImageDto) {
    return this.idproofImagesService.create(createIdproofImageDto);
  }

  @Get()
  findAll() {
    return this.idproofImagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.idproofImagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIdproofImageDto: UpdateIdproofImageDto) {
    return this.idproofImagesService.update(+id, updateIdproofImageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.idproofImagesService.remove(+id);
  }
}
