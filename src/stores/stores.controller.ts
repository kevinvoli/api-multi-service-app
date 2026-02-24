import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { StoresService } from './stores.service';
import { Store } from './entities/store.entity';
import { StoreCategory } from './entities/store-category.entity';
import { IsString, IsNumber, IsOptional } from 'class-validator';

// DTOs (for simplicity, defined here, but should be in separate files)
class CreateStoreDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  categoryId: number; // Assuming a category ID is provided
}

class UpdateStoreDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsNumber()
  categoryId?: number;
}

class CreateStoreCategoryDto {
  @IsString()
  name: string;
}

class UpdateStoreCategoryDto {
  @IsOptional()
  @IsString()
  name?: string;
}

@Controller('stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  // Store Endpoints
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createStore(@Body() createStoreDto: CreateStoreDto): Promise<Store> {
    const category = await this.storesService.findOneStoreCategory(createStoreDto.categoryId);
    return this.storesService.createStore({ ...createStoreDto, category });
  }

  @Get()
  findAllStores(): Promise<Store[]> {
    return this.storesService.findAllStores();
  }

  @Get(':id')
  findOneStore(@Param('id') id: string): Promise<Store> {
    return this.storesService.findOneStore(+id);
  }

  @Patch(':id')
  async updateStore(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto): Promise<Store> {
    const category = updateStoreDto.categoryId ? await this.storesService.findOneStoreCategory(updateStoreDto.categoryId) : undefined;
    return this.storesService.updateStore(+id, { ...updateStoreDto, category });
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeStore(@Param('id') id: string): Promise<void> {
    return this.storesService.removeStore(+id);
  }

  // Store Category Endpoints
  @Post('categories')
  @HttpCode(HttpStatus.CREATED)
  createStoreCategory(@Body() createStoreCategoryDto: CreateStoreCategoryDto): Promise<StoreCategory> {
    return this.storesService.createStoreCategory(createStoreCategoryDto);
  }

  @Get('categories')
  findAllStoreCategories(): Promise<StoreCategory[]> {
    return this.storesService.findAllStoreCategories();
  }

  @Get('categories/:id')
  findOneStoreCategory(@Param('id') id: string): Promise<StoreCategory> {
    return this.storesService.findOneStoreCategory(+id);
  }

  @Patch('categories/:id')
  updateStoreCategory(@Param('id') id: string, @Body() updateStoreCategoryDto: UpdateStoreCategoryDto): Promise<StoreCategory> {
    return this.storesService.updateStoreCategory(+id, updateStoreCategoryDto);
  }

  @Delete('categories/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  removeStoreCategory(@Param('id') id: string): Promise<void> {
    return this.storesService.removeStoreCategory(+id);
  }
}
