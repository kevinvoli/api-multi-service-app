import { Module } from '@nestjs/common';
import { Faqs } from './entities/faq.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FaqsService } from './faqs.service';
import { FaqsController } from './faqs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Faqs])],
  controllers: [FaqsController],
  providers: [FaqsService],
  exports: [TypeOrmModule.forFeature([Faqs])],
})
export class FaqsModule {}
