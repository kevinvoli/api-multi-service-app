import { Module } from '@nestjs/common';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';
import { OdaSousServicesLocationController } from './oda-sous-services-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdaSousServicesLocation } from './entities/oda-sous-services-location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OdaSousServicesLocation])],
  controllers: [OdaSousServicesLocationController],
  providers: [OdaSousServicesLocationService],
})
export class OdaSousServicesLocationModule {}
