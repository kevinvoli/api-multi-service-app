import { Module } from '@nestjs/common';
import { Configurations } from './entities/configuration.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationsService } from './configurations.service';
import { ConfigurationsController } from './configurations.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Configurations])],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService],
  exports: [TypeOrmModule.forFeature([Configurations])],
})
export class ConfigurationsModule {}
