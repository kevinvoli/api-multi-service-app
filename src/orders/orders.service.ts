import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from '../users/entities/user.entity'; // Assuming User entity is needed for order creation

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
    @InjectRepository(OrderDetail)
    private orderDetailsRepository: Repository<OrderDetail>,
    @InjectRepository(User) // Inject UserRepository if needed to link orders to users
    private usersRepository: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    // For simplicity, let's assume createOrderDto contains userId and items
    const user = await this.usersRepository.findOneBy({ id: createOrderDto.userId });
    if (!user) {
      throw new Error('User not found'); // Or throw a NestJS NotFoundException
    }

    const order = this.ordersRepository.create({
      user: user,
      status: 'pending', // Default status
      // other order properties from DTO if any
    });
    const savedOrder = await this.ordersRepository.save(order);

    // Assuming createOrderDto.items is an array of { productId: number, quantity: number, price: number }
    if (createOrderDto.items && createOrderDto.items.length > 0) {
      const orderDetails = createOrderDto.items.map(item =>
        this.orderDetailsRepository.create({
          order: savedOrder,
          quantity: item.quantity,
          price: item.price,
          // productId: item.productId // if product entity exists
        })
      );
      await this.orderDetailsRepository.save(orderDetails);
    }

    return savedOrder;
  }

  async findAll(): Promise<Order[]> {
    return this.ordersRepository.find({ relations: ['user', 'orderDetails'] });
  }

  async findOne(id: number): Promise<Order> {
    return this.ordersRepository.findOne({ where: { id }, relations: ['user', 'orderDetails'] });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    await this.ordersRepository.update(id, updateOrderDto);
    return this.ordersRepository.findOne({ where: { id }, relations: ['user', 'orderDetails'] });
  }

  async remove(id: number): Promise<void> {
    await this.ordersRepository.delete(id);
  }
}
