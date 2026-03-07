import { Module } from '@nestjs/common';
import { OdaSousServicesLocation } from './entities/oda-sous-services-location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';
import { OdaSousServicesLocationController } from './oda-sous-services-location.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OdaSousServicesLocation])],
  controllers: [OdaSousServicesLocationController],
  providers: [OdaSousServicesLocationService],
  exports: [TypeOrmModule.forFeature([OdaSousServicesLocation])],
})
export class OdaSousServicesLocationModule {}
