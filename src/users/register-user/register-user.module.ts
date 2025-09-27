import { Module } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUser } from './entities/register-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterUser])],
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
