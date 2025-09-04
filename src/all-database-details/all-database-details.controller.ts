import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AllDatabaseDetailsService } from './all-database-details.service';
import { CreateAllDatabaseDetailDto } from './dto/create-all-database-detail.dto';
import { UpdateAllDatabaseDetailDto } from './dto/update-all-database-detail.dto';

@Controller('all-database-details')
export class AllDatabaseDetailsController {
  constructor(private readonly allDatabaseDetailsService: AllDatabaseDetailsService) {}

  @Post()
  create(@Body() createAllDatabaseDetailDto: CreateAllDatabaseDetailDto) {
    return this.allDatabaseDetailsService.create(createAllDatabaseDetailDto);
  }

  @Get()
  findAll() {
    return this.allDatabaseDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.allDatabaseDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAllDatabaseDetailDto: UpdateAllDatabaseDetailDto) {
    return this.allDatabaseDetailsService.update(+id, updateAllDatabaseDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.allDatabaseDetailsService.remove(+id);
  }
}
