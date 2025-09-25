import { Module } from '@nestjs/common';
import { OdaSousServicesLocationService } from './oda-sous-services-location.service';
import { OdaSousServicesLocationController } from './oda-sous-services-location.controller';

@Module({
  controllers: [OdaSousServicesLocationController],
  providers: [OdaSousServicesLocationService],
})
export class OdaSousServicesLocationModule {}
