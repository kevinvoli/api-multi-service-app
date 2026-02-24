import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { User } from '../src/users/entities/user.entity';
import { Order } from '../src/orders/entities/order.entity';
import { OrderDetail } from '../src/orders/entities/order-detail.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('OrdersController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;
  let orderRepository: Repository<Order>;
  let orderDetailRepository: Repository<OrderDetail>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<Repository<User>>(getRepositoryToken(User));
    orderRepository = moduleFixture.get<Repository<Order>>(getRepositoryToken(Order));
    orderDetailRepository = moduleFixture.get<Repository<OrderDetail>>(getRepositoryToken(OrderDetail));


    // Clear database before each test
    await orderDetailRepository.query('TRUNCATE TABLE order_detail');
    await orderRepository.query('TRUNCATE TABLE `order`'); // 'order' is a reserved keyword in some DBs, hence backticks
    await userRepository.query('TRUNCATE TABLE user');
  });

  afterAll(async () => {
    await app.close();
  });

  it('/orders (POST) - should create an order with details', async () => {
    // First, create a user
    const user = await userRepository.save({
      firstName: 'Order',
      lastName: 'User',
      email: 'order.user@example.com',
      password: 'password123',
    });

    const createOrderDto = {
      userId: user.id,
      items: [
        { productId: 1, quantity: 2, price: 10.50 },
        { productId: 2, quantity: 1, price: 20.00 },
      ],
    };

    return request(app.getHttpServer())
      .post('/orders')
      .send(createOrderDto)
      .expect(201)
      .then((response) => {
        expect(response.body.id).toBeDefined();
        expect(response.body.user.id).toEqual(user.id);
        expect(response.body.status).toEqual('pending');
      });
  });

  it('/orders (GET) - should return an array of orders', async () => {
    // First, create a user and an order
    const user = await userRepository.save({
      firstName: 'OrderGet',
      lastName: 'UserGet',
      email: 'order.get@example.com',
      password: 'password123',
    });

    const order = await orderRepository.save({
      user: user,
      status: 'completed',
    });

    await orderDetailRepository.save([
      { order: order, quantity: 1, price: 50.00 },
    ]);

    return request(app.getHttpServer())
      .get('/orders')
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].status).toEqual('completed');
        expect(response.body[0].user.email).toEqual(user.email);
        expect(response.body[0].orderDetails).toBeInstanceOf(Array);
        expect(response.body[0].orderDetails.length).toBeGreaterThan(0);
      });
  });
});
