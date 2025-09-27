import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { CreateAdministratorDto } from './dto/create-administrator.dto';
import { UpdateAdministratorDto } from './dto/update-administrator.dto';
import { ApiTags, ApiOperation, ApiResponse, OmitType } from '@nestjs/swagger';
import { Administrators } from './entities/administrator.entity';

// We create a new type for the response that omits the password property.
class AdminResponse extends OmitType(Administrators, ['vPassword'] as const) {}

@ApiTags('Administrators')
@Controller('administrators')
export class AdministratorsController {
  constructor(private readonly service: AdministratorsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new administrator' })
  @ApiResponse({ status: 201, description: 'The administrator has been successfully created.', type: AdminResponse })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  create(@Body() createDto: CreateAdministratorDto): Promise<Omit<Administrators, 'vPassword'>> {
    return this.service.create(createDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all administrators' })
  @ApiResponse({ status: 200, description: 'Return all administrators.', type: [AdminResponse] })
  findAll(): Promise<Omit<Administrators, 'vPassword'>[]> {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an administrator by ID' })
  @ApiResponse({ status: 200, description: 'Return the administrator.', type: AdminResponse })
  @ApiResponse({ status: 404, description: 'Administrator not found.' })
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Omit<Administrators, 'vPassword'>> {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an administrator' })
  @ApiResponse({ status: 200, description: 'The administrator has been successfully updated.', type: AdminResponse })
  @ApiResponse({ status: 404, description: 'Administrator not found.' })
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: UpdateAdministratorDto): Promise<Omit<Administrators, 'vPassword'>> {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an administrator' })
  @ApiResponse({ status: 200, description: 'The administrator has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Administrator not found.' })
  remove(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
    return this.service.remove(id);
  }
}