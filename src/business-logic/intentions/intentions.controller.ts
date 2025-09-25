import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntentionsService } from './intentions.service';
import { CreateIntentionDto } from './dto/create-intention.dto';
import { UpdateIntentionDto } from './dto/update-intention.dto';

@Controller('intentions')
export class IntentionsController {
  constructor(private readonly intentionsService: IntentionsService) {}

  @Post()
  create(@Body() createIntentionDto: CreateIntentionDto) {
    return this.intentionsService.create(createIntentionDto);
  }

  @Get()
  findAll() {
    return this.intentionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntentionDto: UpdateIntentionDto) {
    return this.intentionsService.update(+id, updateIntentionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intentionsService.remove(+id);
  }
}
