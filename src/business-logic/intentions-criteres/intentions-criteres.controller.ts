import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IntentionsCriteresService } from './intentions-criteres.service';
import { CreateIntentionsCritereDto } from './dto/create-intentions-critere.dto';
import { UpdateIntentionsCritereDto } from './dto/update-intentions-critere.dto';

@Controller('intentions-criteres')
export class IntentionsCriteresController {
  constructor(private readonly intentionsCriteresService: IntentionsCriteresService) {}

  @Post()
  create(@Body() createIntentionsCritereDto: CreateIntentionsCritereDto) {
    return this.intentionsCriteresService.create(createIntentionsCritereDto);
  }

  @Get()
  findAll() {
    return this.intentionsCriteresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.intentionsCriteresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIntentionsCritereDto: UpdateIntentionsCritereDto) {
    return this.intentionsCriteresService.update(+id, updateIntentionsCritereDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.intentionsCriteresService.remove(+id);
  }
}
