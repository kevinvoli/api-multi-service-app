import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RequestDataDebugService } from './request-data-debug.service';
import { CreateRequestDataDebugDto } from './dto/create-request-data-debug.dto';
import { UpdateRequestDataDebugDto } from './dto/update-request-data-debug.dto';

@Controller('request-data-debug')
export class RequestDataDebugController {
  constructor(private readonly requestDataDebugService: RequestDataDebugService) {}

  @Post()
  create(@Body() createRequestDataDebugDto: CreateRequestDataDebugDto) {
    return this.requestDataDebugService.create(createRequestDataDebugDto);
  }

  @Get()
  findAll() {
    return this.requestDataDebugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.requestDataDebugService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRequestDataDebugDto: UpdateRequestDataDebugDto) {
    return this.requestDataDebugService.update(+id, updateRequestDataDebugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.requestDataDebugService.remove(+id);
  }
}
