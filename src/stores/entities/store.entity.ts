import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { StoreCategory } from './store-category.entity';

@Entity()
export class Store {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  // Add more fields as needed, e.g., description, phone, etc.

  @ManyToOne(() => StoreCategory, (category) => category.stores)
  category: StoreCategory;
}
