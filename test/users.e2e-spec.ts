import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { User } from '../src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<Repository<User>>(getRepositoryToken(User));

    // Clean up the database before each test
    await userRepository.query('TRUNCATE TABLE user'); // Assuming 'user' is the table name for User entity
  });

  afterAll(async () => {
    await app.close();
  });

  it('/users (POST) - should create a user', () => {
    const createUserDto = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    };

    return request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201)
      .then((response) => {
        expect(response.body.id).toBeDefined();
        expect(response.body.firstName).toEqual(createUserDto.firstName);
        expect(response.body.email).toEqual(createUserDto.email);
      });
  });

  it('/users (GET) - should return an array of users', async () => {
    // First, create a user
    const createUserDto = {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@example.com',
      password: 'password123',
    };
    await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    return request(app.getHttpServer())
      .get('/users')
      .expect(200)
      .then((response) => {
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        expect(response.body[0].email).toEqual(createUserDto.email);
      });
  });
});
