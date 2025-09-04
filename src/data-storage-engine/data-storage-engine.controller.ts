import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataStorageEngineService } from './data-storage-engine.service';
import { CreateDataStorageEngineDto } from './dto/create-data-storage-engine.dto';
import { UpdateDataStorageEngineDto } from './dto/update-data-storage-engine.dto';

@Controller('data-storage-engine')
export class DataStorageEngineController {
  constructor(private readonly dataStorageEngineService: DataStorageEngineService) {}

  @Post()
  create(@Body() createDataStorageEngineDto: CreateDataStorageEngineDto) {
    return this.dataStorageEngineService.create(createDataStorageEngineDto);
  }

  @Get()
  findAll() {
    return this.dataStorageEngineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataStorageEngineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataStorageEngineDto: UpdateDataStorageEngineDto) {
    return this.dataStorageEngineService.update(+id, updateDataStorageEngineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataStorageEngineService.remove(+id);
  }
}
