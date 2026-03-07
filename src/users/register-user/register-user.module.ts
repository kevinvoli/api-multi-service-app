import { Module } from '@nestjs/common';
import { RegisterUser } from './entities/register-user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RegisterUser])],
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
  exports: [TypeOrmModule.forFeature([RegisterUser])],
})
export class RegisterUserModule {}
