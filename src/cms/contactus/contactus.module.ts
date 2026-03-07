import { Module } from '@nestjs/common';
import { Contactus } from './entities/contactus.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactusService } from './contactus.service';
import { ContactusController } from './contactus.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contactus])],
  controllers: [ContactusController],
  providers: [ContactusService],
  exports: [TypeOrmModule.forFeature([Contactus])],
})
export class ContactusModule {}
