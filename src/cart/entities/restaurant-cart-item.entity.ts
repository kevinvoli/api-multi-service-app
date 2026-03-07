import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurant_cart_items')
export class RestaurantCartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  iUserId: number;

  @Column({ type: 'int' })
  iCompanyId: number;

  @Column({ type: 'int' })
  iMenuItemId: number;

  @Column({ type: 'int' })
  iFoodMenuId: number;

  /** IDs des options séparés par virgule, ex: "12,15" */
  @Column({ type: 'varchar', length: 200, default: '' })
  vOptionId: string;

  /** IDs des addons séparés par virgule, ex: "3,7" */
  @Column({ type: 'varchar', length: 200, default: '' })
  vAddonId: string;

  @Column({ type: 'int', default: 1 })
  iQty: number;

  @Column({ type: 'text', nullable: true })
  tInstruction: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  eFoodType: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
