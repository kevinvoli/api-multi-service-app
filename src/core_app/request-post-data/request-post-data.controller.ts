import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestPostDataService } from './request-post-data.service';
import { CreateRequestPostDatumDto } from './dto/create-request-post-datum.dto';
import { UpdateRequestPostDatumDto } from './dto/update-request-post-datum.dto';

@Controller('request-post-data')
export class RequestPostDataController {
  constructor(private readonly requestPostDataService: RequestPostDataService) {}

  @Post()
  create(@Body() createRequestPostDatumDto: CreateRequestPostDatumDto) {
    return this.requestPostDataService.create(createRequestPostDatumDto);
  }

  @Get()
  findAll() {
    return this.requestPostDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestPostDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestPostDatumDto: UpdateRequestPostDatumDto) {
    return this.requestPostDataService.update(+id, updateRequestPostDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestPostDataService.remove(+id);
  }
}
