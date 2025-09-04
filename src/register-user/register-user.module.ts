import { Module } from '@nestjs/common';
import { RegisterUserService } from './register-user.service';
import { RegisterUserController } from './register-user.controller';

@Module({
  controllers: [RegisterUserController],
  providers: [RegisterUserService],
})
export class RegisterUserModule {}
