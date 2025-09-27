import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactusService } from './contactus.service';
import { CreateContactusDto } from './dto/create-contactus.dto';
import { UpdateContactusDto } from './dto/update-contactus.dto';

@Controller('contactus')
export class ContactusController {
  constructor(private readonly contactusService: ContactusService) {}

  @Post()
  async create(@Body() createContactusDto: CreateContactusDto) {
    return await this.contactusService.create(createContactusDto);
  }

  @Get()
  async findAll() {
    return await this.contactusService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.contactusService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateContactusDto: UpdateContactusDto) {
    return await this.contactusService.update(+id, updateContactusDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.contactusService.remove(+id);
  }
}