import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContentCubexDetailsService } from './content-cubex-details.service';
import { CreateContentCubexDetailDto } from './dto/create-content-cubex-detail.dto';
import { UpdateContentCubexDetailDto } from './dto/update-content-cubex-detail.dto';

@Controller('content-cubex-details')
export class ContentCubexDetailsController {
  constructor(private readonly contentCubexDetailsService: ContentCubexDetailsService) {}

  @Post()
  create(@Body() createContentCubexDetailDto: CreateContentCubexDetailDto) {
    return this.contentCubexDetailsService.create(createContentCubexDetailDto);
  }

  @Get()
  findAll() {
    return this.contentCubexDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contentCubexDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContentCubexDetailDto: UpdateContentCubexDetailDto) {
    return this.contentCubexDetailsService.update(+id, updateContentCubexDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contentCubexDetailsService.remove(+id);
  }
}
