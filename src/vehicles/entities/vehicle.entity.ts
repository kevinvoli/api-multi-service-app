import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Driver } from './driver.entity'; // Import Driver for relation

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column({ unique: true })
  licensePlate: string;

  @ManyToOne(() => Driver, (driver) => driver.vehicles)
  driver: Driver;
}
