import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';
import { StoreCategory } from './entities/store-category.entity';

@Injectable()
export class StoresService {
  constructor(
    @InjectRepository(Store)
    private storeRepository: Repository<Store>,
    @InjectRepository(StoreCategory)
    private storeCategoryRepository: Repository<StoreCategory>,
  ) {}

  // Store CRUD
  async createStore(store: Partial<Store>): Promise<Store> {
    const newStore = this.storeRepository.create(store);
    return this.storeRepository.save(newStore);
  }

  async findAllStores(): Promise<Store[]> {
    return this.storeRepository.find({ relations: ['category'] });
  }

  async findOneStore(id: number): Promise<Store> {
    const store = await this.storeRepository.findOne({ where: { id }, relations: ['category'] });
    if (!store) {
      throw new NotFoundException(`Store with ID ${id} not found`);
    }
    return store;
  }

  async updateStore(id: number, store: Partial<Store>): Promise<Store> {
    await this.storeRepository.update(id, store);
    return this.findOneStore(id);
  }

  async removeStore(id: number): Promise<void> {
    await this.storeRepository.delete(id);
  }

  // StoreCategory CRUD
  async createStoreCategory(category: Partial<StoreCategory>): Promise<StoreCategory> {
    const newCategory = this.storeCategoryRepository.create(category);
    return this.storeCategoryRepository.save(newCategory);
  }

  async findAllStoreCategories(): Promise<StoreCategory[]> {
    return this.storeCategoryRepository.find();
  }

  async findOneStoreCategory(id: number): Promise<StoreCategory> {
    const category = await this.storeCategoryRepository.findOneBy({ id });
    if (!category) {
      throw new NotFoundException(`Store Category with ID ${id} not found`);
    }
    return category;
  }

  async updateStoreCategory(id: number, category: Partial<StoreCategory>): Promise<StoreCategory> {
    await this.storeCategoryRepository.update(id, category);
    return this.findOneStoreCategory(id);
  }

  async removeStoreCategory(id: number): Promise<void> {
    await this.storeCategoryRepository.delete(id);
  }
}
